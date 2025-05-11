import InterceptorHelper from "./helpers/interceptorHelper";

export const apiResentOtp = (data: {email: string}) =>
  InterceptorHelper.intercept("/send-otp-mail", {
    body: JSON.stringify(data),
    method: "POST",
  });

export const apiGetUserNotifications = () =>
  InterceptorHelper.intercept<IResponse<INotification>>("/user/get-notification");
