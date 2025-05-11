import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {ICreateNewPasswordForm} from "../interfaces";

import {useNavigate} from "react-router-dom";

import {apiResetPassword} from "../services";

import useMutation from "@/hooks/useMutation";

import useAuthJourney from "./useAuthJourney";

const schema: Yup.ObjectSchema<ICreateNewPasswordForm> = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  code: Yup.string().required("Code is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const useCreateNewPasswordForm = () => {
  const navigate = useNavigate();
  const {userEmail} = useAuthJourney();
  if (!userEmail) {
    navigate("/auth/reset-password");
  }
  const form = useForm<ICreateNewPasswordForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {email: userEmail ?? ""},
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiResetPassword,
    mutationKey: ["reset-password"],
  });

  const handleSubmit = form.handleSubmit((values: ICreateNewPasswordForm) => {
    mutate(values, {
      onSuccess: () => {
        navigate("/auth/login");
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useCreateNewPasswordForm;
