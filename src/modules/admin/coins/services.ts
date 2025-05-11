import InterceptorHelper from "@/helpers/interceptorHelper";
import {ICoinData} from "./interfaces";
import AppHelper from "@/helpers/appHelper";

export const apiGetCoins = async (page: number, limit: number, search: string) => {
  const data = AppHelper.urlSearchParams({
    page: page,
    length: limit,
    searchableFields: '["name"]',
    "search[value]": search,
  });
  return InterceptorHelper.intercept<IResponse<ICoinData[]>>(`/admin/coin-list?${data}`);
};

export const apiUpdateCoin = (data: FormData) => {
  return InterceptorHelper.intercept(`/admin/coin-save-process`, {
    method: "POST",
    body: data,
  });
};
