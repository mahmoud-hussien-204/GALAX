import * as Yup from "yup";

import {IUpdateProfileInfoForm} from "../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

import useAuth from "@/modules/auth/hooks/useAuth";

import useMutation from "@/hooks/useMutation";

import {apiUpdateProfileAvatar, apiUpdateProfileData} from "../services";
import AppHelper from "@/helpers/appHelper";

const schema: Yup.ObjectSchema<IUpdateProfileInfoForm> = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  avatar: Yup.mixed<File | string>()
    .required("avatar is required")
    .test("fileType", "Only image files are allowed", (value) => {
      if (typeof value === "string") return true;
      return value ? ["image/jpeg", "image/png", "image/webp"].includes(value.type) : false;
    })
    .test("fileSize", "File size must be less than 5MB", (value) => {
      if (typeof value === "string") return true;
      return value ? value.size <= 5 * 1024 * 1024 : false;
    }),
});

const useUpdateProfileInfoForm = () => {
  const {userData, saveUser} = useAuth();

  const form = useForm<IUpdateProfileInfoForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      name: userData?.name || "",
      email: userData?.email || "",
      phone: userData?.phone || "",
      avatar: userData?.avatar || "",
    },
  });

  const {mutate: mutateApiUpdateProfileAvatar, isPending: isPendingApiUpdateProfileAvatar} =
    useMutation({
      mutationFn: apiUpdateProfileAvatar,
      mutationKey: ["update-profile-avatar"],
    });

  const {mutate: mutateApiUpdateProfileData, isPending: isPendingApiUpdateProfileData} =
    useMutation({
      mutationFn: apiUpdateProfileData,
      mutationKey: ["update-profile-data"],
    });

  const handleSubmit = form.handleSubmit((values) => {
    // const {avatar, ...data} = values;
    const {avatar, ...data} = AppHelper.getDirtyFields(values, form.formState.dirtyFields);

    mutateApiUpdateProfileAvatar(
      {avatar},
      {
        onSuccess: (response) => {
          if (!Reflect.ownKeys(data).length) {
            const res = response as IResponse<IUser>;
            if (res?.data?.avatar) {
              saveUser(res.data);
            }
          } else {
            mutateApiUpdateProfileData(data, {
              onSuccess: (res) => {
                saveUser(res.data);
              },
            });
          }
        },
      }
    );
  });

  const isPending = isPendingApiUpdateProfileAvatar || isPendingApiUpdateProfileData;

  return {form, handleSubmit, isPending};
};

export default useUpdateProfileInfoForm;
