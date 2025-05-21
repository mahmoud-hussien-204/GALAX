import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {IEditPromoCodesForm, IPromoCodes} from "../interfaces";

import useMutation from "@/hooks/useMutation";

import {apiEditPromoCodes} from "../services";

import {useQueryClient} from "@tanstack/react-query";

import {schema} from "./useCreatePromoCodeForm";

import * as Yup from "yup";

const extendSchema = schema.shape({
  id: Yup.string().required(),
});

const useEditPromoCodeForm = () => {
  const {hide, data: dataProps} = useModal();

  const data = dataProps as IPromoCodes;

  const form = useForm<IEditPromoCodesForm>({
    resolver: yupResolver(extendSchema),
    mode: "onTouched",
    defaultValues: {
      id: data?.id || "",
      name: data?.name || "",
      value: data?.value || 0,
      max_usage: data?.max_usage || 0,
    },
  });

  const queryClient = useQueryClient();

  const {mutate, isPending} = useMutation({
    mutationFn: apiEditPromoCodes,
    mutationKey: ["admin-edit-promo-code"],
  });

  const handleSubmit = form.handleSubmit((values: IEditPromoCodesForm) => {
    mutate(values, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["admin-get-promo-code"]});
        hide();
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useEditPromoCodeForm;
