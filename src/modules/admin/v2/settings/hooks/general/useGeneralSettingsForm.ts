import * as Yup from "yup";

import {IGeneralSettingsForm} from "../../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

import useMutation from "@/hooks/useMutation";

import {apiPostGeneralSettings} from "../../services";

import useGeneralSettings from "../useGeneralSettings";

const schema: Yup.ObjectSchema<IGeneralSettingsForm> = Yup.object().shape({
  lang: Yup.string().required("This field is required"),
  company_name: Yup.string().required("This field is required"),
  base_coin_type: Yup.string().required("This field is required"),
  copyright_text: Yup.string().required("This field is required"),
  number_of_confirmation: Yup.number()
    .typeError("This field must be a number")
    .required("This field is required"),
});

const useGeneralSettingsForm = () => {
  const {settings} = useGeneralSettings();

  const form = useForm<IGeneralSettingsForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      lang: settings?.settings?.lang || "",
      company_name: settings?.settings?.company_name,
      base_coin_type: settings?.settings?.base_coin_type,
      copyright_text: settings?.settings?.copyright_text,
      number_of_confirmation: settings?.settings?.number_of_confirmation,
    },
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiPostGeneralSettings,
  });

  const handleSubmit = form.handleSubmit((values: IGeneralSettingsForm) => {
    mutate(values);
  });

  return {form, handleSubmit, isPending};
};

export default useGeneralSettingsForm;
