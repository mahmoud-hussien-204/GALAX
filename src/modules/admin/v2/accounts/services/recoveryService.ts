import InterceptorHelper from "@/helpers/interceptorHelper";
import {IRecoveryListing} from "../interfaces";
import AppHelper from "@/helpers/appHelper";

export const getAllRecoveryListings = (params: IQueryParams) => {
  const paramsString = AppHelper.urlSearchParams(params);
  return InterceptorHelper.intercept<IResponse<IRecoveryListing[]>>(
    `/towing-services?${paramsString}`
  );
};

export const apiAddRecoveryListings = (data: FormData) => {
  return InterceptorHelper.intercept<IResponse<IRecoveryListing[]>>(`/towing-services`, {
    method: "POST",
    body: data,
  });
};

export const apiUpdateRecoveryListing = (id: IRecoveryListing["id"], data: FormData) => {
  return InterceptorHelper.intercept<IResponse<IRecoveryListing[]>>(`/towing-services/${id}`, {
    method: "POST",
    body: data,
  });
};

export const apiDeleteRecoveryListing = (id: string) => {
  return InterceptorHelper.intercept(`/towing-services/${id}`, {
    method: "DELETE",
  });
};
