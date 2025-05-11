import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {IPlanData, IEditPlanForm, PlanFeesMethodEnum, PlanStatusEnum} from "../interfaces";
import useMutation from "@/hooks/useMutation";
import {apiCreateAndUpdatePlan} from "../services";
import AppHelper from "@/helpers/appHelper";

const schema: Yup.ObjectSchema<IEditPlanForm> = Yup.object().shape({
  plan_name: Yup.string().required("This field is required"),
  duration: Yup.number().typeError("Duration must be a number").required("This field is required"),
  amount: Yup.string()
    .typeError("Minimum amount must be a number")
    .required("This field is required"),
  bonus_type: Yup.string().required("This field is required"),
  bonus_coin_type: Yup.string().required("This field is required"),
  bonus: Yup.string().typeError("Bonus must be a number").required("This field is required"),
  description: Yup.string().required("This field is required"),
  status: Yup.string()
    .oneOf([PlanStatusEnum.ACTIVE, PlanStatusEnum.INACTIVE], "Please select a status")
    .required("This field is required"),
  image: Yup.mixed<File>().optional(),
});

const useEditPlanForm = () => {
  const {hide, data} = useModal();

  const planData = data as IPlanData;

  const form = useForm<IEditPlanForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      bonus_coin_type: planData.bonus_coin_type || "",
      plan_name: planData.plan_name || "",
      amount: planData.amount || "0",
      bonus_type: PlanFeesMethodEnum.FIXED,
      bonus: planData.bonus || "0",
      description: planData.description || "",
      status:
        planData.status == "Active"
          ? PlanStatusEnum.ACTIVE
          : PlanStatusEnum.INACTIVE || PlanStatusEnum.ACTIVE,
      duration: planData.duration || 0,
    },
  });

  const {mutate, isPending, queryClient} = useMutation({
    mutationFn: apiCreateAndUpdatePlan,
    mutationKey: ["edit-plan"],
  });

  const handleSubmit = form.handleSubmit((values: IEditPlanForm) => {
    const formData = AppHelper.toFormData({...values, edit_id: planData.id});

    mutate(formData, {
      onSuccess: () => {
        queryClient.invalidateQueries(["admin-get-plans"] as any);
        hide();
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useEditPlanForm;
