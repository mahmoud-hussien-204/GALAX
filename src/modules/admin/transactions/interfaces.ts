export interface IDepositRequest {
  id: number;
  address: string;
  fees: string;
  sender_wallet_id: number;
  receiver_wallet_id: number;
  address_type: string;
  type: string;
  amount: string;
  btc: string;
  doller: string;
  transaction_id: string;
  status: string;
  received_amount: string;
  is_admin_receive: number;
  updated_by: string;
  from_address: string;
  confirmations: number;
  created_at: string;
  updated_at: string;
  coin_type: string;
  deposit_status: string;
  action: {
    Accept: string;
    Reject: string;
  };
}

export interface IWithdrawalRequest {
  id: number;
  type: string;
  sender: string;
  coinType: string;
  address: string;
  receiver: string;
  amount: number;
  fees: number;
  transactionId: string;
  updateDate: string;
  status: string;
}

export interface IDefaultCoinsHistory {
  id: number;
  amount: string;
  sender_user_id: string;
  receiver_user_id: string;
  sender_wallet_id: number;
  receiver_wallet_id: number;
  status: number;
  created_at: string;
  updated_at: string;
  deposit_status: string;
}

export interface IAllTransactions {
  address: string;
  amount: string;
  fees: string;
  deposit_status: string;
  address_type: string;
  type: string;
  sender: string;
  receiver: string;
  transaction_id: string;
  transaction_hash: string;
  created_at: string;
}

export interface IPendingWithdrawal {
  id: number;
  address: string;
  amount: string;
  user_id: number;
  fees: string;
  transaction_hash: string;
  confirmations: string;
  addr_type: number;
  updated_at: string;
  wallet_id: number;
  coin_type: string;
  receiver_wallet_id: string;
  address_type: string;
  deposit_status: string;
  sender: string;
  receiver: string;
  action: IPendingWithdrawalAction;
  user: any;
}

export interface IPendingWithdrawalAction {
  Accept: string;
  Reject: string;
}

export interface IGasSentData {
  id: number;
  unique_code: string;
  deposit_id: number;
  wallet_id: number;
  amount: string;
  fees: string;
  coin_type: string;
  admin_address: string;
  user_address: string;
  transaction_hash: string;
  status: number;
  created_at: string;
  updated_at: string;
  deposit_status: string;
}

export interface ITokenReceivedData {
  id: number;
  deposit_id: number;
  unique_code: string;
  amount: string;
  fees: string;
  to_address: string;
  from_address: string;
  transaction_hash: string;
  status: number;
  created_at: string;
  updated_at: string;
  deposit_status: string;
}
