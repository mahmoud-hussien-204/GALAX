export interface IEditCoinForm {
  coin_id: number;
  name: string;
  fee: string;
  minimum_withdrawal: string;
  maximum_withdrawal: string;
  coin_icon?: File;
  is_withdrawal?: boolean;
  status?: boolean;
}

export interface ICoinData {
  id: number;
  name: string;
  status: string;
  type: string;
  minimum_withdrawal: string;
  maximum_withdrawal: string;
  fee: string;
  updated_at: string;
  is_withdrawal: number;
  action: {
    Edit: string;
  };
}
