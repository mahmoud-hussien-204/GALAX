import * as Yup from "yup";

import {IGeneralSettingsTwilioForm} from "../../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

import useMutation from "@/hooks/useMutation";

import {apiPostGeneralSettingsTwilio} from "../../services";

import useGeneralSettings from "../useGeneralSettings";

const schema: Yup.ObjectSchema<IGeneralSettingsTwilioForm> = Yup.object().shape({
  twillo_secret_key: Yup.string().required("This field is required"),
  twillo_auth_token: Yup.string().required("This field is required"),
  twillo_number: Yup.number()
    .typeError("This field must be a number")
    .required("This field is required"),
});

const useGeneralSettingsTwilioForm = () => {
  const {settings} = useGeneralSettings();

  const form = useForm<IGeneralSettingsTwilioForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      twillo_auth_token: settings?.settings?.twillo_auth_token,
      twillo_number: settings?.settings?.twillo_number,
      twillo_secret_key: settings?.settings?.twillo_secret_key,
    },
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiPostGeneralSettingsTwilio,
  });

  const handleSubmit = form.handleSubmit((values: IGeneralSettingsTwilioForm) => {
    mutate(values);
  });

  return {form, handleSubmit, isPending};
};

export default useGeneralSettingsTwilioForm;
