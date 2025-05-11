import InterceptorHelper from "@/helpers/interceptorHelper";

import {
  ICreateNewPasswordForm,
  IEmailVerifyForm,
  ILoginForm,
  IResetPasswordForm,
} from "./interfaces";

export const apiLoginUser = async (values: ILoginForm) => {
  return InterceptorHelper.intercept<IResponse<IUserResponse>>("/auth/login", {
    body: JSON.stringify(values),
    method: "POST",
  });
};

export const apiForgotPassword = async (values: IResetPasswordForm) => {
  return InterceptorHelper.intercept("/auth/forgot-password", {
    body: JSON.stringify(values),
    method: "POST",
  });
};

export const apiResetPassword = async (values: ICreateNewPasswordForm) => {
  return InterceptorHelper.intercept("/auth/reset-password", {
    body: JSON.stringify(values),
    method: "POST",
  });
};

export const apiEmailVerify = async (values: IEmailVerifyForm) => {
  return InterceptorHelper.intercept("/auth/validate-code", {
    body: JSON.stringify(values),
    method: "POST",
  });
};

export const apiLogout = async () => {
  return InterceptorHelper.intercept("/auth/logout", {
    method: "POST",
  });
};
