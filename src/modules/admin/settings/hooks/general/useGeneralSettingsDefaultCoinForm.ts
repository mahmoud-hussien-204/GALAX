import * as Yup from "yup";

import {IGeneralSettingsDefaultToken} from "../../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

import useMutation from "@/hooks/useMutation";

import {apiPostGeneralSettingsDefaultCoin} from "../../services";

import useGeneralSettings from "../useGeneralSettings";

const schema: Yup.ObjectSchema<IGeneralSettingsDefaultToken> = Yup.object().shape({
  coin_name: Yup.string().required("Coin Name is required"),
  coin_price: Yup.number()
    .typeError("This field must be a number")
    .required("Coin Price is required"),
  contract_coin_name: Yup.string().required("Contract Coin Name is required"),
  chain_link: Yup.string().required("Chain Link is required"),
  chain_id: Yup.string().required("Chain Id is required"),
  contract_address: Yup.string().required("Contract Address is required"),
  wallet_address: Yup.string().required("Wallet Address is required"),
  private_key: Yup.string().required("Wallet Address is required"),
  contract_decimal: Yup.number()
    .typeError("This field must be a number")
    .required("Contract Decimal is required"),
  gas_limit: Yup.number()
    .typeError("This field must be a number")
    .required("Contract Decimal is required"),
  max_send_limit: Yup.number()
    .typeError("This field must be a number")
    .required("Contract Decimal is required"),
});

const useGeneralSettingsDefaultCoinForm = () => {
  const {settings} = useGeneralSettings();

  const form = useForm<IGeneralSettingsDefaultToken>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      coin_name: settings?.settings?.coin_name,
      coin_price: settings?.settings?.coin_price,
      contract_coin_name: settings?.settings?.contract_coin_name,
      chain_link: settings?.settings?.chain_link,
      chain_id: settings?.settings?.chain_id,
      contract_address: settings?.settings?.contract_address,
      wallet_address: settings?.settings?.wallet_address,
      private_key: settings?.settings?.private_key,
      contract_decimal: settings?.settings?.contract_decimal,
      gas_limit: settings?.settings?.gas_limit,
      max_send_limit: settings?.settings?.max_send_limit,
    },
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiPostGeneralSettingsDefaultCoin,
  });

  const handleSubmit = form.handleSubmit((values: IGeneralSettingsDefaultToken) => {
    mutate(values);
  });

  return {form, handleSubmit, isPending};
};

export default useGeneralSettingsDefaultCoinForm;
