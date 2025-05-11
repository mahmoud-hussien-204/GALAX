export enum PlanFeesMethodEnum {
  FIXED = "1",
  PERCENTAGE = "2",
}

export enum PlanStatusEnum {
  ACTIVE = "1",
  INACTIVE = "0",
}

export interface ICreatePlanForm {
  plan_name: string;
  duration: number;
  amount: string;
  bonus_type: string;
  bonus_coin_type: string;
  bonus: string;
  status: PlanStatusEnum;
  description: string;
  image?: File | string;
}

export type IEditPlanForm = ICreatePlanForm;

export interface IPlanData {
  id: number;
  plan_name: string;
  duration: number;
  amount: string;
  image: string;
  bonus_type: string;
  bonus: string;
  bonus_coin_type: string;
  status: string;
  description: string;
  created_at: string;
  updated_at: string;
  action: {
    edit_url: string;
  };
}
export interface ISettingsForm {
  plan_minimum_amount: number;
  plan_maximum_amount: number;
}

export interface IMemberTransactionData {
  id: number;
  club_id: number;
  user_id: number;
  wallet_id: string;
  amount: string;
  type: string;
  status: string;
  created_at: string;
  updated_at: string;
  email: string;
  wallet: {
    id: number;
    user_id: number;
    name: string;
    coin_type: string;
    coin_id: number;
    status: number;
    is_primary: number;
    balance: string;
    referral_balance: string;
    created_at: string;
    updated_at: string;
    key: string;
    type: number;
  };
}

export interface IBonusDistributionData {
  id: number;
  user_id: number;
  plan_id: string;
  wallet_id: string;
  membership_id: number;
  distribution_date: string;
  bonus_amount: string;
  plan_current_bonus: string;
  bonus_type: number;
  bonus_amount_btc: string;
  bonus_coin_type: string;
  status: string;
  created_at: string;
  updated_at: string;
  email: string;
}

export interface IMembersListData {
  id: number;
  user_id: number;
  plan_id: number;
  wallet_id: number;
  amount: string;
  start_date: string;
  end_date: string;
  status: string;
  created_at: string;
  updated_at: string;
  email: string;
  plan_name: string;
  bonus: number;
  plan: Plan;
}

export interface Plan {
  id: number;
  plan_name: string;
  duration: number;
  amount: string;
  image: any;
  bonus_type: number;
  bonus: string;
  bonus_coin_type: string;
  status: number;
  description: string;
  created_at: string;
  updated_at: string;
}

interface IFeesOpthions {
  1: string;
  2: string;
}

export interface IPlansFormData {
  coins: ICoin[];
  fees_types: IFeesOpthions;
}
