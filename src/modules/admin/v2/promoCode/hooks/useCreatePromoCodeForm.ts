import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {ICreatePromoCodesForm} from "../interfaces";

import * as Yup from "yup";

import useMutation from "@/hooks/useMutation";

import {apiCreatePromoCodes} from "../services";

import {useQueryClient} from "@tanstack/react-query";

export const schema: Yup.ObjectSchema<ICreatePromoCodesForm> = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  value: Yup.number().typeError("Value must be a number").required("Value is required"),
  max_usage: Yup.number().typeError("Max usage must be a number").required("Max usage is required"),
});

const useCreateBannerForm = () => {
  const {hide} = useModal();

  const form = useForm<ICreatePromoCodesForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const queryClient = useQueryClient();

  const {mutate, isPending} = useMutation({
    mutationFn: apiCreatePromoCodes,
    mutationKey: ["admin-create-promo-code"],
  });

  const handleSubmit = form.handleSubmit((values: ICreatePromoCodesForm) => {
    mutate(values, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["admin-get-promo-code"]});
        hide();
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useCreateBannerForm;
