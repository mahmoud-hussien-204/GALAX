import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {ICreatePlanForm, PlanFeesMethodEnum, PlanStatusEnum} from "../interfaces";

import * as Yup from "yup";
import useMutation from "@/hooks/useMutation";
import AppHelper from "@/helpers/appHelper";
import {apiCreateAndUpdatePlan} from "../services";

const schema: Yup.ObjectSchema<ICreatePlanForm> = Yup.object().shape({
  plan_name: Yup.string().required("This field is required"),
  duration: Yup.number().typeError("Duration must be a number").required("This field is required"),
  amount: Yup.string()
    .typeError("Minimum amount must be a number")
    .required("This field is required"),
  bonus_type: Yup.string()
    .oneOf([PlanFeesMethodEnum.FIXED, PlanFeesMethodEnum.PERCENTAGE], "Please select a fees method")
    .required("This field is required"),
  bonus_coin_type: Yup.string().required("This field is required"),
  bonus: Yup.string().typeError("Bonus must be a number").required("This field is required"),
  description: Yup.string().required("This field is required"),
  status: Yup.string()
    .oneOf([PlanStatusEnum.ACTIVE, PlanStatusEnum.INACTIVE], "Please select a status")
    .required("This field is required"),
  image: Yup.mixed<File>().optional(),
});

const useCreatePlanForm = () => {
  const {hide} = useModal();

  const form = useForm<ICreatePlanForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const {mutate, isPending, queryClient} = useMutation({
    mutationFn: apiCreateAndUpdatePlan,
    mutationKey: ["create-plan"],
  });

  const handleSubmit = form.handleSubmit((values: ICreatePlanForm) => {
    const formData = AppHelper.toFormData(values);

    mutate(formData, {
      onSuccess: () => {
        queryClient.invalidateQueries(["admin-get-plans"] as any);
        hide();
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useCreatePlanForm;
