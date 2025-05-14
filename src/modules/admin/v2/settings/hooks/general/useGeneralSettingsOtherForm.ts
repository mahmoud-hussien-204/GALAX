import * as Yup from "yup";

import {IGeneralSettingsOtherForm} from "../../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

import useGeneralSettings from "../useGeneralSettings";
import useMutation from "@/hooks/useMutation";
import {apiPostGeneralSettings} from "../../services";

const schema: Yup.ObjectSchema<IGeneralSettingsOtherForm> = Yup.object().shape({
  admin_send_default_minimum: Yup.number()
    .typeError("Minimum amount must be a number")
    .required("This field is required"),
  admin_send_default_maximum: Yup.number()
    .typeError("Minimum amount must be a number")
    .required("This field is required"),
});

const useGeneralSettingsOtherForm = () => {
  const {settings} = useGeneralSettings();

  const form = useForm<IGeneralSettingsOtherForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      admin_send_default_maximum: settings?.settings.admin_send_default_maximum,
      admin_send_default_minimum: settings?.settings.admin_send_default_minimum,
    },
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiPostGeneralSettings,
  });

  const handleSubmit = form.handleSubmit((values: IGeneralSettingsOtherForm) => {
    mutate(values);
  });

  return {form, handleSubmit, isPending};
};

export default useGeneralSettingsOtherForm;
