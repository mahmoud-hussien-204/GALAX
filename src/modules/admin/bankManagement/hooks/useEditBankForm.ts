import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {IEditBankForm, IBankItem} from "../interfaces";

import {schema} from "./useCreateBankForm";

import useMutation from "@/hooks/useMutation";

import {apiUpdateBank} from "../services";

import AppHelper from "@/helpers/appHelper";

import * as Yup from "yup";

const useEditBankForm = () => {
  const {hide, data} = useModal();

  const bankData = data as IBankItem;

  const form = useForm<IEditBankForm>({
    resolver: yupResolver(
      schema.shape({
        edit_id: Yup.number().required("This field is required"),
      })
    ),
    mode: "onTouched",
    defaultValues: {
      account_holder_name: bankData.account_holder_name,
      account_holder_address: bankData.account_holder_address,
      bank_name: bankData.bank_name,
      bank_address: bankData.bank_address,
      country: bankData.country,
      swift_code: bankData.swift_code,
      iban: bankData.iban,
      note: bankData.note,
      status: AppHelper.convertStatusToBinary(bankData.status),
      edit_id: bankData.id,
    },
  });

  const {mutate, queryClient, isPending} = useMutation({
    mutationFn: apiUpdateBank,
  });

  const handleSubmit = form.handleSubmit((values: IEditBankForm) => {
    mutate(values, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["admin-get-banks-list"]});
        hide();
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useEditBankForm;
