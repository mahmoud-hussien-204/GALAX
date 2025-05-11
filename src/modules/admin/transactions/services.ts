import AppHelper from "@/helpers/appHelper";
import InterceptorHelper from "@/helpers/interceptorHelper";
import {
  IAllTransactions,
  IDefaultCoinsHistory,
  IGasSentData,
  IPendingWithdrawal,
  ITokenReceivedData,
  IDepositRequest,
} from "./interfaces";
import {ENUM_ALL_TRANSACTIONS} from "./enums";

export const getDefaultCoinSendOrReceiveHistory = async (
  page: number,
  limit: number,
  search?: string
) => {
  const data = AppHelper.urlSearchParams({
    page: page,
    length: limit,
    searchableFields: '["sender_user_id","receiver_user_id","amount", "deposit_status"]',
    "search[value]": search,
  });

  return InterceptorHelper.intercept<IResponse<IDefaultCoinsHistory[]>>(
    `/admin/default-coin-transaction-history?${data}`
  );
};

export const getAllCoinTransactionHistory = async (
  path: ENUM_ALL_TRANSACTIONS,
  page: number,
  limit: number,
  search?: string
) => {
  const data = AppHelper.urlSearchParams({
    page: page,
    length: limit,
    searchableFields: '["sender","address","amount"]',
    "search[value]": search,
  });

  return InterceptorHelper.intercept<IResponse<IAllTransactions[]>>(`/admin/${path}?${data}`);
};

export const apiGetPendingWithdrawal = async (
  page: number,
  limit: number,
  search?: string,
  filter?: string
) => {
  const data = AppHelper.urlSearchParams({
    page: page,
    length: limit,
    searchableFields: "['coin_type' , 'receiver', 'sender']",
    "search[value]": search,
    "filters[deposit_status]": filter,
  });
  return InterceptorHelper.intercept<IResponse<IPendingWithdrawal[]>>(
    `/admin/pending-withdrawal?${data}`
  );
};

export const apiGetDepositRequests = async (
  page: number,
  limit: number,
  search?: string,
  filter?: string
) => {
  const data = AppHelper.urlSearchParams({
    page: page,
    length: limit,
    searchableFields: "['address' , 'transaction_id', 'from_address']",
    "search[value]": search,
    "filters[deposit_status]": filter,
  });
  return InterceptorHelper.intercept<IResponse<IDepositRequest[]>>(
    `/admin/pending-token-deposit-history?${data}`
  );
};

export const apiGetGasSentHistory = async (page: number, limit: number, search?: string) => {
  const data = AppHelper.urlSearchParams({
    page: page,
    length: limit,
    searchableFields: "['coin_type' , 'amount']",
    "search[value]": search,
  });
  return InterceptorHelper.intercept<IResponse<IGasSentData[]>>(`/admin/gas-send-history?${data}`);
};

export const apiGetTokenReceiveHistory = async (page: number, limit: number, search?: string) => {
  const data = AppHelper.urlSearchParams({
    page: page,
    length: limit,
    searchableFields: "['amount']",
    "search[value]": search,
  });
  return InterceptorHelper.intercept<IResponse<ITokenReceivedData[]>>(
    `/admin/token-receive-history?${data}`
  );
};
