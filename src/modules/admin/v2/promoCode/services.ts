import InterceptorHelper from "@/helpers/interceptorHelper";

import {IPromoCodes, ICreatePromoCodesForm, IEditPromoCodesForm} from "./interfaces";

import AppHelper from "@/helpers/appHelper";

export const apiGetPromoCodes = () =>
  InterceptorHelper.intercept<IResponse<IPromoCodes[]>>("/promo-codes");

export const apiCreatePromoCodes = (data: ICreatePromoCodesForm) => {
  const formData = AppHelper.toFormData(data);

  return InterceptorHelper.intercept(`/promo-codes`, {
    method: "POST",
    body: formData,
  });
};

export const apiEditPromoCodes = (data: Partial<IEditPromoCodesForm>) => {
  const {id, ...rest} = data;

  return InterceptorHelper.intercept(`/promo-codes/${id}`, {
    method: "PUT",
    body: JSON.stringify(rest),
  });
};

export const apiDeletePromoCodes = (id: string) => {
  return InterceptorHelper.intercept(`/promo-codes/${id}`, {
    method: "DELETE",
  });
};
