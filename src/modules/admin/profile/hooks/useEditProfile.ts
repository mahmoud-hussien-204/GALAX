import * as Yup from "yup";

import {IEditProfile} from "../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

import useAuth from "@/modules/auth/hooks/useAuth";

import useMutation from "@/hooks/useMutation";

import {apiUpdateUserProfile} from "../services";

const schema: Yup.ObjectSchema<IEditProfile> = Yup.object().shape({
  first_name: Yup.string().required("Full name is required"),
  last_name: Yup.string().required("Full name is required"),
  email: Yup.string().required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  country: Yup.string().required("Country is required"),
  gender: Yup.number().required("Gender is required"),
});

const useEditProfile = () => {
  const {userData, saveUser} = useAuth();

  const form = useForm<IEditProfile>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      country: userData?.country || "",
      email: userData?.email || "",
      first_name: userData?.first_name || "",
      last_name: userData?.last_name || "",
      phone: userData?.phone || "",
      gender: userData?.gender || 0,
    },
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiUpdateUserProfile,
    mutationKey: ["update-user-profile"],
  });

  const handleSubmit = form.handleSubmit((values: IEditProfile) => {
    mutate(values, {
      onSuccess: () => {
        const data: any = {...userData, ...values};

        saveUser(data);
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useEditProfile;
