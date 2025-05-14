import * as Yup from "yup";

import {IGeneralReferralSettingsForm} from "../../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

import useMutation from "@/hooks/useMutation";

import {apiPostGeneralSettingsReferral} from "../../services";

import useGeneralSettings from "../useGeneralSettings";

const schema: Yup.ObjectSchema<IGeneralReferralSettingsForm> = Yup.object().shape({
  referral_signup_reward: Yup.number()
    .typeError("The Field must be a number")
    .required("This field is required"),
  fees_level1: Yup.number()
    .typeError("The Field must be a number")
    .required("This field is required"),
  fees_level2: Yup.number()
    .typeError("The Field must be a number")
    .required("This field is required"),
  fees_level3: Yup.number()
    .typeError("The Field must be a number")
    .required("This field is required"),
});

const useGeneralReferralSettingsForm = () => {
  const {settings} = useGeneralSettings();

  const form = useForm<IGeneralReferralSettingsForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      referral_signup_reward: settings?.settings?.referral_signup_reward || 0,
      fees_level1: settings?.settings?.fees_level1 || 0,
      fees_level2: settings?.settings?.fees_level2 || 0,
      fees_level3: settings?.settings?.fees_level3 || 0,
    },
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiPostGeneralSettingsReferral,
  });

  const handleSubmit = form.handleSubmit((values: IGeneralReferralSettingsForm) => {
    mutate(values);
  });

  return {form, handleSubmit, isPending};
};

export default useGeneralReferralSettingsForm;
