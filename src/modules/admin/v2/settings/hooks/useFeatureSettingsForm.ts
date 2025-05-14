import * as Yup from "yup";

import {IFeatureSettingsForm} from "../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

import useGeneralSettings from "./useGeneralSettings";

import useMutation from "@/hooks/useMutation";

import {apiPostFeatureSettings} from "../services";

import AppHelper from "@/helpers/appHelper";

const schema: Yup.ObjectSchema<IFeatureSettingsForm> = Yup.object().shape({
  max_co_wallet_user: Yup.number()
    .typeError("This field must be a number")
    .required("This field is required"),
  NOCAPTCHA_SECRET: Yup.string().required("This field is required"),
  co_wallet_withdrawal_user_approval_percentage: Yup.number()
    .typeError("This field must be a number")
    .required("This field is required"),
  NOCAPTCHA_SITEKEY: Yup.string().required("This field is required"),
  swap_enabled: Yup.string().required("This field is required"),
  co_wallet_feature_active: Yup.string().required("This field is required"),
  google_recapcha: Yup.string().required("This field is required"),
});

const useFeatureSettingsForm = () => {
  const {settings} = useGeneralSettings();

  const form = useForm<IFeatureSettingsForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      max_co_wallet_user: settings?.settings?.max_co_wallet_user || 0,
      NOCAPTCHA_SECRET: settings?.settings?.NOCAPTCHA_SECRET || "",
      co_wallet_withdrawal_user_approval_percentage:
        settings?.settings?.co_wallet_withdrawal_user_approval_percentage || 0,
      NOCAPTCHA_SITEKEY: settings?.settings?.NOCAPTCHA_SITEKEY || "",
      swap_enabled: AppHelper.convertSwitchValueToBinary(settings?.settings?.swap_enabled),
      co_wallet_feature_active: AppHelper.convertSwitchValueToBinary(
        settings?.settings?.co_wallet_feature_active
      ),
      google_recapcha: AppHelper.convertSwitchValueToBinary(settings?.settings?.google_recapcha),
    },
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiPostFeatureSettings,
  });

  const handleSubmit = form.handleSubmit((values: IFeatureSettingsForm) => {
    const payload = {
      ...values,
      swap_enabled: AppHelper.convertSwitchValueToBinary(values.swap_enabled),
      co_wallet_feature_active: AppHelper.convertSwitchValueToBinary(
        values.co_wallet_feature_active
      ),
      google_recapcha: AppHelper.convertSwitchValueToBinary(values.google_recapcha),
    };
    mutate(payload);
  });

  return {form, handleSubmit, isPending};
};

export default useFeatureSettingsForm;
