export interface IBuyCoinOrder {
  id: number;
  payment_type: string;
  email: string;
  coin: string;
  deposit_status: string;
  btc: string;
  created_at: string;
  address: string;
  actions: {
    accept: string;
    reject: string;
  };
}

export interface IGiveCoinHistory {
  id: number;
  email: string;
  wallet_id: number;
  amount: number;
  created_at: string;
}

export interface IGiveCoinToUser {
  amount: number;
  user_id: number[];
}
