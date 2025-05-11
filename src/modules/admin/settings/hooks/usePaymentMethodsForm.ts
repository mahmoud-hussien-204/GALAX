import * as Yup from "yup";

import {IPaymentMethodsForm} from "../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

import useGeneralSettings from "./useGeneralSettings";

import AppHelper from "@/helpers/appHelper";

import useMutation from "@/hooks/useMutation";

import {apiPostPaymentMethodsSettings} from "../services";

const schema: Yup.ObjectSchema<IPaymentMethodsForm> = Yup.object().shape({
  payment_method_coin_payment: Yup.string().required("This field is required"),
  payment_method_bank_deposit: Yup.string().required("This field is required"),
  payment_method_stripe: Yup.string().required("This field is required"),
});

const usePaymentMethodsForm = () => {
  const {settings} = useGeneralSettings();

  const form = useForm<IPaymentMethodsForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      payment_method_coin_payment: AppHelper.convertSwitchValueToBinary(
        settings?.settings?.payment_method_coin_payment
      ),
      payment_method_bank_deposit: AppHelper.convertSwitchValueToBinary(
        settings?.settings?.payment_method_bank_deposit
      ),
      payment_method_stripe: AppHelper.convertSwitchValueToBinary(
        settings?.settings?.payment_method_stripe
      ),
    },
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiPostPaymentMethodsSettings,
  });

  const handleSubmit = form.handleSubmit((values: IPaymentMethodsForm) => {
    const payload = {
      payment_method_coin_payment: AppHelper.convertSwitchValueToBinary(
        values.payment_method_coin_payment
      ),
      payment_method_bank_deposit: AppHelper.convertSwitchValueToBinary(
        values.payment_method_bank_deposit
      ),
      payment_method_stripe: AppHelper.convertSwitchValueToBinary(values.payment_method_stripe),
    };
    mutate({
      active_id: payload,
    });
  });

  return {form, handleSubmit, isPending};
};

export default usePaymentMethodsForm;
