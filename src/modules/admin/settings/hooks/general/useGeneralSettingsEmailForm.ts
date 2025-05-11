import * as Yup from "yup";

import {IGeneralSettingsEmailForm} from "../../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

import useMutation from "@/hooks/useMutation";

import {apiPostGeneralSettingsEmail} from "../../services";

import useGeneralSettings from "../useGeneralSettings";

const schema: Yup.ObjectSchema<IGeneralSettingsEmailForm> = Yup.object().shape({
  mail_host: Yup.string().required("This field is required"),
  mail_port: Yup.number()
    .typeError("This field must be a number")
    .required("This field is required"),
  mail_username: Yup.string().email("Enter valid email").required("This field is required"),
  mail_password: Yup.string().required("This field is required"),
  mail_encryption: Yup.string().required("This field is required"),
  mail_from_address: Yup.string().required("This field is required"),
});

const useGeneralSettingsEmailForm = () => {
  const {settings} = useGeneralSettings();

  const form = useForm<IGeneralSettingsEmailForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      mail_host: settings?.settings?.mail_host,
      mail_port: settings?.settings?.mail_port,
      mail_username: settings?.settings?.mail_username,
      mail_password: settings?.settings?.mail_password,
      mail_encryption: settings?.settings?.mail_encryption,
      mail_from_address: settings?.settings?.mail_from_address,
    },
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiPostGeneralSettingsEmail,
  });

  const handleSubmit = form.handleSubmit((values: IGeneralSettingsEmailForm) => {
    mutate(values);
  });

  return {form, handleSubmit, isPending};
};

export default useGeneralSettingsEmailForm;
