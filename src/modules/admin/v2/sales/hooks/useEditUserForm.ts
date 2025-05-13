import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {IEditUserForm, IUserData} from "../interfaces";

import * as Yup from "yup";

import {getIdFromUrl} from "@/helpers";

import useMutation from "@/hooks/useMutation";

import {apiUpdateUser} from "../services";

import {useQueryClient} from "@tanstack/react-query";

import {schema} from "./useAddUserForm";

const useEditUserForm = () => {
  const {hide, data} = useModal();

  const userData = data as IUserData;

  const queryClient = useQueryClient();

  const {mutate, isPending} = useMutation({
    mutationFn: apiUpdateUser,
    mutationKey: ["admin-update-user"],
  });

  const form = useForm<IEditUserForm>({
    resolver: yupResolver(
      schema.shape({
        id: Yup.number().required("This field is required"),
        role: Yup.number().optional(),
      })
    ),
    mode: "onTouched",
    defaultValues: {
      email: userData?.email || "",
      first_name: userData?.first_name || "",
      last_name: userData?.last_name || "",
      phone: userData?.phone || "",
      id: userData.id,
    },
  });

  const handleSubmit = form.handleSubmit((values: IEditUserForm) => {
    mutate(
      {...values, id: getIdFromUrl(userData.action.Edit) as string},
      {
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ["admin-get-users"]});
          hide();
        },
      }
    );
  });

  return {form, handleSubmit, isPending};
};

export default useEditUserForm;
