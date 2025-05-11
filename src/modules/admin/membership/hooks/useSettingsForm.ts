import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {ISettingsForm} from "../interfaces";

import * as Yup from "yup";
import useMutation from "@/hooks/useMutation";
import {apiUpdateSettings} from "../services";

const schema: Yup.ObjectSchema<ISettingsForm> = Yup.object().shape({
  plan_minimum_amount: Yup.number()
    .typeError("Minimum amount must be number")
    .required("Minimum amount is required"),
  plan_maximum_amount: Yup.number()
    .typeError("Maximum amount must be number")
    .required("Maximum amount is required"),
});

const useSettingsForm = () => {
  const {hide} = useModal();

  const form = useForm<ISettingsForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const {mutate} = useMutation({
    mutationFn: apiUpdateSettings,
    mutationKey: ["update-plan-settings"],
  });

  const handleSubmit = form.handleSubmit((values: ISettingsForm) => {
    console.log(values);
    mutate(values, {
      onSuccess: () => {
        hide();
      },
    });
  });

  return {form, handleSubmit};
};

export default useSettingsForm;
