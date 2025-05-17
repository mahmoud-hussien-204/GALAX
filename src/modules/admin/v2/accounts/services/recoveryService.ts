import InterceptorHelper from "@/helpers/interceptorHelper";
import {IRecoveryListing} from "../interfaces";

export const getAllRecoveryListings = () => {
  return InterceptorHelper.intercept<IResponse<IRecoveryListing[]>>(`/towing-services`);
};

export const apiAddRecoveryListings = (data: FormData) => {
  return InterceptorHelper.intercept<IResponse<IRecoveryListing[]>>(`/towing-services`, {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
    },
  });
};
