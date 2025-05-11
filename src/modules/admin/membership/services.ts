import AppHelper from "@/helpers/appHelper";
import InterceptorHelper from "@/helpers/interceptorHelper";
import {
  IBonusDistributionData,
  IMembersListData,
  IMemberTransactionData,
  IPlanData,
  IPlansFormData,
  ISettingsForm,
} from "./interfaces";
import {ENUM_PLANS_STATUS} from "./enums";

export const apiGetPlans = async (
  page: number,
  limit: number,
  search: string,
  status: ENUM_PLANS_STATUS
) => {
  const data = AppHelper.urlSearchParams({
    page: page,
    length: limit,
    searchableFields: '["plan_name"]',
    "search[value]": search,
    "filters[status]": status ?? ENUM_PLANS_STATUS.ACTIVE,
  });
  return InterceptorHelper.intercept<IResponse<IPlanData[]>>(`/admin/plan-list?${data}`);
};

export const apiCreateAndUpdatePlan = async (data: any) => {
  return InterceptorHelper.intercept("/admin/plan-save", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const apiUpdateSettings = async (data: ISettingsForm) => {
  return InterceptorHelper.intercept(`/admin/landing-page-setting-save`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const apiGetMembersTransactionHistory = async (
  page: number,
  limit: number,
  search: string
) => {
  const data = AppHelper.urlSearchParams({
    page: page,
    length: limit,
    searchableFields: '["email"]',
    "search[value]": search,
  });
  return InterceptorHelper.intercept<IResponse<IMemberTransactionData[]>>(
    `/admin/membership-coin-transaction-history?${data}`
  );
};

export const apiGetMembersBonusDistribution = async (
  page: number,
  limit: number,
  search: string
) => {
  const data = AppHelper.urlSearchParams({
    page: page,
    length: limit,
    searchableFields: '["email"]',
    "search[value]": search,
  });
  return InterceptorHelper.intercept<IResponse<IBonusDistributionData[]>>(
    `/admin/club-bonus-distribution?${data}`
  );
};

export const apiGetMembersList = async (page: number, limit: number, search: string) => {
  const data = AppHelper.urlSearchParams({
    page: page,
    length: limit,
    searchableFields: '["email"]',
    "search[value]": search,
  });
  return InterceptorHelper.intercept<IResponse<IMembersListData[]>>(
    `/admin/membership-list?${data}`
  );
};

export const apiDistributeMembershipBonus = async () => {
  return InterceptorHelper.intercept("/admin/admin-club-bonus-distribution-process");
};

export const apiGetPlansFormData = (url: string) => {
  return InterceptorHelper.intercept<IPlansFormData>(url, {}, false);
};
