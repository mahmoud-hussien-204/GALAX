import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {IAddUserForm} from "../interfaces";

import * as Yup from "yup";

import useMutation from "@/hooks/useMutation";

import {apiAddUser} from "../services";

import {useQueryClient} from "@tanstack/react-query";

export const schema: Yup.ObjectSchema<IAddUserForm> = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("First name is required"),
  email: Yup.string().email("Enter a valid email").required("email is required"),
  phone: Yup.string().required("Phone number is required"),
  role: Yup.number().required("Role is required"),
});

const useAddUserForm = () => {
  const {hide} = useModal();

  const form = useForm<IAddUserForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const queryClient = useQueryClient();

  const {mutate, isPending} = useMutation({
    mutationFn: apiAddUser,
    mutationKey: ["admin-add-users"],
  });

  const handleSubmit = form.handleSubmit((values: IAddUserForm) => {
    mutate(values, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["admin-get-users"]});
        hide();
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useAddUserForm;
