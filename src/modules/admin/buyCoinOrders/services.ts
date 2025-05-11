import AppHelper from "@/helpers/appHelper";

import InterceptorHelper from "@/helpers/interceptorHelper";

import {IBuyCoinOrder, IGiveCoinHistory, IGiveCoinToUser} from "./interfaces";

export const apiGetBuyCoinOrders = (params: IQueryParams & {filter: string}) => {
  const data = AppHelper.urlSearchParams({
    page: params.page,
    length: params.limit,
    search: params.search,
    searchableFields: '["deposit_status", "payment_type", "address"]',
    "filters[deposit_status]": params.filter,
  });

  return InterceptorHelper.intercept<IResponse<IBuyCoinOrder[]>>(`/admin/buy-coin-order?${data}`);
};

export const apiAcceptBuyCoinOrder = (url: string) => InterceptorHelper.intercept(url, {}, false);

export const apiRejectBuyCoinOrder = (url: string) => InterceptorHelper.intercept(url, {}, false);

export const apiGetGiveCoinHistory = (params: IQueryParams) => {
  const data = AppHelper.urlSearchParams({
    page: params.page,
    length: params.limit,
    search: params.search,
    searchableFields: '["wallet_id", "email"]',
  });

  return InterceptorHelper.intercept<IResponse<IGiveCoinHistory[]>>(
    `/admin/give-coin-history?${data}`
  );
};

export const apiGetUsers = () => {
  return InterceptorHelper.intercept<{users: IUser[]}>(`/admin/give-coin-to-user`);
};

export const apiPostGiveCoinToUser = (data: IGiveCoinToUser) => {
  return InterceptorHelper.intercept(`/admin/give-coin-to-user-process`, {
    method: "Post",
    body: JSON.stringify(data),
  });
};
