import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {IGiveCoinToUser} from "../interfaces";

import * as Yup from "yup";

import useMutation from "@/hooks/useMutation";

import {apiPostGiveCoinToUser} from "../services";

const schema: Yup.ObjectSchema<IGiveCoinToUser> = Yup.object().shape({
  amount: Yup.number().typeError("Amount must be a number").required("Fees Percentage is required"),
  user_id: Yup.array(Yup.number().required("User is required")).required("User is required"),
});

const useGiveCoinForm = () => {
  const {hide} = useModal();

  const form = useForm<IGiveCoinToUser>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const {mutate, isPending, queryClient} = useMutation({
    mutationFn: apiPostGiveCoinToUser,
  });

  const handleSubmit = form.handleSubmit((values: IGiveCoinToUser) => {
    mutate(values, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["admin-get-give-coin-history"]});
        hide();
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useGiveCoinForm;
