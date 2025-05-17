import InterceptorHelper from "@/helpers/interceptorHelper";

import {
  IGeneralSettings,
  IGeneralSettingsForm,
  IUpdatePassword,
  IUpdateProfileInfoForm,
} from "./interfaces";

import AppHelper from "@/helpers/appHelper";

export const apiGetGeneralSettings = () =>
  InterceptorHelper.intercept<IResponse<IGeneralSettings>>("/app-settings");

export const apiUpdateGeneralSettings = (data: IGeneralSettingsForm) => {
  const formData = AppHelper.toFormData(data);

  return InterceptorHelper.intercept("/app-settings", {
    method: "Post",
    body: formData,
  });
};

export const apiChangePassword = (values: IUpdatePassword) =>
  InterceptorHelper.intercept("/account/change-password", {
    body: JSON.stringify(values),
    method: "POST",
  });

export const apiUpdateProfileAvatar = (data: Partial<Pick<IUpdateProfileInfoForm, "avatar">>) => {
  if (!data.avatar) return new Promise((resolve) => resolve({}));
  const formData = AppHelper.toFormData(data);
  return InterceptorHelper.intercept<IResponse<IUser>>("/account/update-avatar", {
    method: "POST",
    body: formData,
  });
};

export const apiUpdateProfileData = (data: Partial<Omit<IUpdateProfileInfoForm, "avatar">>) => {
  return InterceptorHelper.intercept<IResponse<IUser>>("/account/update-profile", {
    method: "PUT",
    body: JSON.stringify(data),
  });
};
