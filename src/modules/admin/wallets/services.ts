import InterceptorHelper from "@/helpers/interceptorHelper";

import {ENUM_WALLET_TYPE} from "./enums";
import {IAdminWallet} from "./interfaces";

export const apigetAdminWallets = async (
  path: ENUM_WALLET_TYPE,
  page: number,
  limit: number,
  search: string
) => {
  const data = new URLSearchParams();
  data.append("page", page.toString() || "1");
  data.append("length", limit.toString() || "10");
  data.append("search[value]", search || "");
  data.append("searchableFields", '["name" , "coin_type"]');

  return InterceptorHelper.intercept<IResponse<IAdminWallet[]>>(
    `/admin/${path}?${data.toString()}`
  );
};
