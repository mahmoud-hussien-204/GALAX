import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {IEditFAQForm} from "../interfaces";

import useMutation from "@/hooks/useMutation";

import {apiEditFaq} from "../services";

import {schema} from "./useCreateFaqForm";

import * as Yup from "yup";

const useEditFaqForm = () => {
  const {hide} = useModal();

  const form = useForm<IEditFAQForm>({
    resolver: yupResolver(
      schema.shape({
        edit_id: Yup.number().required("This field is required"),
      })
    ),
    mode: "onTouched",
    defaultValues: {},
  });

  const {mutate, queryClient, isPending} = useMutation({
    mutationFn: apiEditFaq,
  });

  const handleSubmit = form.handleSubmit((values: IEditFAQForm) => {
    mutate(values, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["admin-get-faq-list"]});
        hide();
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useEditFaqForm;
