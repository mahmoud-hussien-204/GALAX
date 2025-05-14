import InterceptorHelper from "@/helpers/interceptorHelper";

import {IBanner, ICreateBannerForm, IEditBannerForm} from "./interfaces";

import AppHelper from "@/helpers/appHelper";

export const apiGetBanners = () => InterceptorHelper.intercept<IResponse<IBanner[]>>("/banner");

export const apiCreateBanner = (data: ICreateBannerForm) => {
  const formData = AppHelper.toFormData(data);

  return InterceptorHelper.intercept(`/banner`, {
    method: "POST",
    body: formData,
  });
};

export const apiEditBanner = (data: Partial<IEditBannerForm>) => {
  const {id, ...rest} = data;

  const formData = AppHelper.toFormData(rest);

  return InterceptorHelper.intercept(`/banner/${id}`, {
    method: "PUT",
    body: formData,
  });
};

export const apiDeleteBanner = (id: string) => {
  return InterceptorHelper.intercept(`/banner/${id}`, {
    method: "DELETE",
  });
};
