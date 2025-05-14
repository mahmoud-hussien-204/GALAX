import * as Yup from "yup";

import {IGeneralSettingsPaymentForm} from "../../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

import useGeneralSettings from "../useGeneralSettings";

import useMutation from "@/hooks/useMutation";

import {apiPostGeneralSettingsPayment} from "../../services";

const schema: Yup.ObjectSchema<IGeneralSettingsPaymentForm> = Yup.object().shape({
  COIN_PAYMENT_PUBLIC_KEY: Yup.string().required("This field is required"),
  COIN_PAYMENT_PRIVATE_KEY: Yup.string().required("This field is required"),
  ipn_merchant_id: Yup.string().required("This field is required"),
  ipn_secret: Yup.string().required("This field is required"),
  STRIPE_KEY: Yup.string().required("This field is required"),
  STRIPE_SECRET: Yup.string().required("This field is required"),
});

const useGeneralSettingsPaymentForm = () => {
  const {settings} = useGeneralSettings();

  const form = useForm<IGeneralSettingsPaymentForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      COIN_PAYMENT_PUBLIC_KEY: settings?.settings?.COIN_PAYMENT_PUBLIC_KEY,
      COIN_PAYMENT_PRIVATE_KEY: settings?.settings?.COIN_PAYMENT_PRIVATE_KEY,
      ipn_merchant_id: settings?.settings?.ipn_merchant_id,
      ipn_secret: settings?.settings?.ipn_secret,
      STRIPE_KEY: settings?.settings?.STRIPE_KEY,
      STRIPE_SECRET: settings?.settings?.STRIPE_SECRET,
    },
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiPostGeneralSettingsPayment,
  });

  const handleSubmit = form.handleSubmit((values: IGeneralSettingsPaymentForm) => {
    mutate(values);
  });

  return {form, handleSubmit, isPending};
};

export default useGeneralSettingsPaymentForm;
