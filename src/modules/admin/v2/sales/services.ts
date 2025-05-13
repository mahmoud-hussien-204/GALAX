import InterceptorHelper from "@/helpers/interceptorHelper";

import {ENUM_USERS_STATUS} from "./enums";

import {
  IAddUserForm,
  IUserData,
  IKycVerification,
  IKycVerificationData,
  IRejectKycVerificationForm,
} from "./interfaces";

import {ICoinData} from "../coins/interfaces";

import AppHelper from "@/helpers/appHelper";

export const apiGetUsers = (
  type: ENUM_USERS_STATUS,
  page: number,
  limit: number,
  search: string
) => {
  const data = new URLSearchParams();
  data.append("type", type || ENUM_USERS_STATUS.ACTIVE_USERS);
  data.append("page", page.toString() || "1");
  data.append("length", limit.toString() || "10");
  data.append("search[value]", search || "");
  data.append("searchableFields", '["first_name","last_name","email"]');

  return InterceptorHelper.intercept<IResponse<IUserData[]>>(`/admin/users?${data.toString()}`);
};

export const apiAddUser = (data: IAddUserForm) => {
  return InterceptorHelper.intercept(`/admin/user-add`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const apiGetCoinList = (page: number, limit: number, search: string) => {
  const data = new URLSearchParams();
  data.append("page", page.toString() || "1");
  data.append("length", limit.toString() || "10");
  data.append("search[value]", search || "");
  data.append("searchableFields", '["name"]');

  return InterceptorHelper.intercept<IResponse<ICoinData[]>>(`/admin/coin-list?${data.toString()}`);
};

export const apiAdjustCoin = () => {
  return InterceptorHelper.intercept(
    `/admin/adjust-coin-list-with-coin-payment?update=coinPayment`
  );
};

export const apiUpdateUser = (data: IAddUserForm & {id: string}) => {
  return InterceptorHelper.intercept(`/admin/user-profile-update`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const apiGetKycList = ({limit, page, search}: IQueryParams) => {
  const data = AppHelper.urlSearchParams({
    page,
    length: limit,
    "search[value]": search,
    // searchableFields: '["kyc_status","kyc_level","kyc_level_name"]',
  });
  return InterceptorHelper.intercept<IResponse<IKycVerification[]>>(
    `/admin/pending-id-verified-user?${data.toString()}`
  );
};

export const apiGetKycVerificationDetails = (url: string) =>
  InterceptorHelper.intercept<IKycVerificationData>(url, {}, false);

export const apiAcceptKycVerification = (url: string) =>
  InterceptorHelper.intercept<IKycVerificationData>(url, {}, false);

export const apiRejectKycVerification = (url: string, data: IRejectKycVerificationForm) =>
  InterceptorHelper.intercept<IKycVerificationData>(
    url,
    {
      body: JSON.stringify(data),
      method: "POST",
    },
    false
  );
