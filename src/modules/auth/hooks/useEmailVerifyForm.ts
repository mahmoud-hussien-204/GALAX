import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {IEmailVerifyForm} from "../interfaces";

import {useNavigate} from "react-router-dom";

import {apiEmailVerify} from "../services";

import useMutation from "@/hooks/useMutation";

import useAuthJourney from "./useAuthJourney";

const schema: Yup.ObjectSchema<IEmailVerifyForm> = Yup.object().shape({
  code: Yup.string().required("Code is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const useEmailVerifyForm = () => {
  const navigate = useNavigate();
  const {userEmail} = useAuthJourney();
  if (!userEmail) {
    navigate("/auth/reset-password");
  }
  const form = useForm<IEmailVerifyForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {email: userEmail ?? ""},
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiEmailVerify,
    mutationKey: ["reset-password"],
  });

  const handleSubmit = form.handleSubmit((values: IEmailVerifyForm) => {
    mutate(values, {
      onSuccess: () => {
        navigate("/auth/login");
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useEmailVerifyForm;
