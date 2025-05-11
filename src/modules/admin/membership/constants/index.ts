import {ENUM_PLANS_STATUS} from "../enums";
import {PlanFeesMethodEnum, PlanStatusEnum} from "../interfaces";

export const constantPlansStatus = [
  {
    label: "plans Status",
    value: "",
    disabled: true,
  },
  {
    label: "Active",
    value: ENUM_PLANS_STATUS.ACTIVE,
  },
  {
    label: "Deactive",
    value: ENUM_PLANS_STATUS.DEACTIVE,
  },
];

export const constantPlanFeesMethods = [
  {
    label: "Plan Fees Method",
    value: "",
    disabled: true,
  },
  {
    label: "Fixed",
    value: PlanFeesMethodEnum.FIXED,
  },
  {
    label: "Percentage",
    value: PlanFeesMethodEnum.PERCENTAGE,
  },
];

export const constantPlanActivationStatus = [
  {
    label: "Plan Activation Status",
    value: "",
    disabled: true,
  },
  {
    label: "Active",
    value: PlanStatusEnum.ACTIVE,
  },
  {
    label: "Inactive",
    value: PlanStatusEnum.INACTIVE,
  },
];
