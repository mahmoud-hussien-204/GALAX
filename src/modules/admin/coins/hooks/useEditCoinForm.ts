import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {IEditCoinForm, ICoinData} from "../interfaces";

import * as Yup from "yup";

import AppHelper from "@/helpers/appHelper";
import useMutation from "@/hooks/useMutation";
import {apiUpdateCoin} from "../services";

const schema: Yup.ObjectSchema<IEditCoinForm> = Yup.object().shape({
  coin_id: Yup.number().required("Coin Id is required"),
  name: Yup.string().required("Coin Name is required"),
  minimum_withdrawal: Yup.string().required("Minimum Withdrawal is required"),
  maximum_withdrawal: Yup.string().required("Maximum Withdrawal is required"),
  fee: Yup.string().required("Fees Percentage is required"),
  coin_icon: Yup.mixed<File>().optional(),
  is_withdrawal: Yup.boolean().optional(),
  status: Yup.boolean().optional(),
});

const useEditCoinForm = () => {
  const {hide, data} = useModal();

  const coinData = data as ICoinData;

  const form = useForm<IEditCoinForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      name: coinData.name,
      minimum_withdrawal: coinData.minimum_withdrawal,
      maximum_withdrawal: coinData.maximum_withdrawal,
      fee: coinData.fee,
      status: coinData.status === "Active" ? true : false,
      is_withdrawal: coinData.is_withdrawal ? true : false,
      coin_id: coinData.id,
    },
  });

  const {mutate, isPending, queryClient} = useMutation({
    mutationFn: apiUpdateCoin,
    mutationKey: ["update-coin"],
  });

  console.log(form.formState.errors);

  const handleSubmit = form.handleSubmit((values: IEditCoinForm) => {
    const formData = AppHelper.toFormData({
      ...values,
      status: values.status ? 1 : 0,
      is_withdrawal: values.is_withdrawal ? 1 : 0,
    });
    console.log(...formData);
    mutate(formData, {
      onSuccess: () => {
        queryClient.invalidateQueries(["admin-get-coins"] as any);
        hide();
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useEditCoinForm;
