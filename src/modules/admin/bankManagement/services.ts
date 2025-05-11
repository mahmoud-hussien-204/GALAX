import InterceptorHelper from "@/helpers/interceptorHelper";

import {IBankItem, ICreateBankForm, IEditBankForm} from "./interfaces";

import AppHelper from "@/helpers/appHelper";

export const apiGetBankList = ({limit, page, search}: IQueryParams) => {
  const data = AppHelper.urlSearchParams({
    page,
    length: limit,
    "search[value]": search,
    searchableFields: '["account_holder_name","account_holder_address","iban","country"]',
  });

  return InterceptorHelper.intercept<IResponse<IBankItem[]>>(`/admin/banks?${data}`);
};

export const apiCreateNewBank = (data: ICreateBankForm) => {
  return InterceptorHelper.intercept(`/admin/bank-add-process`, {
    body: JSON.stringify(data),
    method: "POST",
  });
};

export const apiUpdateBank = (data: IEditBankForm) => {
  return InterceptorHelper.intercept("/admin/bank-add-process", {
    body: JSON.stringify(data),
    method: "POST",
  });
};

export const apiDeleteBank = (url: string) => {
  return InterceptorHelper.intercept(
    url,
    {
      method: "Get",
    },
    false
  );
};
