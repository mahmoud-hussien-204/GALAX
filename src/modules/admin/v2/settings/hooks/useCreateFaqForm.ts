import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {IFAQForm} from "../interfaces";

import * as Yup from "yup";

import useMutation from "@/hooks/useMutation";

import {apiCreateFaq} from "../services";

export const schema: Yup.ObjectSchema<IFAQForm> = Yup.object().shape({
  question: Yup.string().required("This field is required"),
  answer: Yup.string().required("This field is required"),
  status: Yup.number().required("This field is required"),
});

const useCreateFaqForm = () => {
  const {hide} = useModal();

  const form = useForm<IFAQForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const {mutate, queryClient, isPending} = useMutation({
    mutationFn: apiCreateFaq,
  });

  const handleSubmit = form.handleSubmit((values: IFAQForm) => {
    mutate(values, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["admin-get-faq-list"]});
        hide();
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useCreateFaqForm;
