export interface IPromoCodes {
  id: string;
  name: string;
  value: number;
  max_usage: number;
  current_usage: number;
  created_at: string;
  updated_at: string;
}

export interface ICreatePromoCodesForm {
  name: string;
  value: number;
  max_usage: number;
}

export type IEditPromoCodesForm = ICreatePromoCodesForm & {id: string};
