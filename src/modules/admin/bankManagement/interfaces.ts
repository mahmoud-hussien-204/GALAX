export interface IBankItem {
  id: number;
  account_holder_name: string;
  account_holder_address: string;
  bank_name: string;
  bank_address: string;
  country: string;
  country_name: string;
  swift_code: string;
  iban: string;
  note: string;
  status: string;
  created_at: string;
  updated_at: string;
  action: Action;
}

export interface Action {
  Edit: string;
  Delete: string;
}

export interface ICreateBankForm {
  account_holder_name: string;
  account_holder_address: string;
  bank_name: string;
  bank_address: string;
  country: string;
  swift_code: string;
  iban: string;
  note: string;
  status: string;
}

export type IEditBankForm = ICreateBankForm & {edit_id: number};
