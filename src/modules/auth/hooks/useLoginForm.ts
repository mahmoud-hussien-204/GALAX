import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {ILoginForm} from "../interfaces";

import useAuth from "./useAuth";

import {useNavigate} from "react-router-dom";

import {apiLoginUser} from "../services";

import useMutation from "@/hooks/useMutation";

// import useAuthJourney from "./useAuthJourney";

import {EnumUserRole} from "@/enums";

const schema: Yup.ObjectSchema<ILoginForm> = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const useLoginForm = () => {
  const navigate = useNavigate();
  // const {saveUserEmail} = useAuthJourney();
  const {saveUser} = useAuth();

  const form = useForm<ILoginForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiLoginUser,
    mutationKey: ["login-user"],
  });

  const handleSubmit = form.handleSubmit(async (values: ILoginForm) => {
    mutate(values, {
      onSuccess: (data) => {
        const userRole = EnumUserRole.admin;
        saveUser({...data.data.user, token: data.data.access_token, role: userRole});
        navigate("/");
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (data: any) => {
        console.log("error", data);
        // if (data.email_verified === 0) {
        //   saveUserEmail(values.email);
        //   navigate("/auth/email-verify");
        //   return;
        // }
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useLoginForm;
