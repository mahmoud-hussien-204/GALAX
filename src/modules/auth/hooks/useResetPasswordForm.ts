import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {IResetPasswordForm} from "../interfaces";

import useAuthJourney from "./useAuthJourney";

import {useNavigate} from "react-router-dom";

import useMutation from "@/hooks/useMutation";

import {apiForgotPassword} from "../services";

const schema: Yup.ObjectSchema<IResetPasswordForm> = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const useResetPasswordForm = () => {
  const navigate = useNavigate();

  const {saveUserEmail} = useAuthJourney();

  const {mutate, isPending} = useMutation({
    mutationFn: apiForgotPassword,
    mutationKey: ["forgot-password"],
  });

  const form = useForm<IResetPasswordForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const handleSubmit = form.handleSubmit((values: IResetPasswordForm) => {
    mutate(values, {
      onSuccess: () => {
        saveUserEmail(values.email);
        navigate("/auth/confirm-email");
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useResetPasswordForm;
