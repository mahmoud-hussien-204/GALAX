import InterceptorHelper from "@/helpers/interceptorHelper";

import {
  IGeneralSettingsDefaultToken,
  IGeneralSettingsEmailForm,
  IGeneralSettingsForm,
  IGeneralSettingsTwilioForm,
  IGeneralSettings,
  IGeneralSettingsOtherForm,
  IGeneralReferralSettingsForm,
  IGeneralSettingsPaymentForm,
  IGeneralKycSettingsForm,
  IFeatureSettingsForm,
  IPaymentMethodsForm,
  ISendNotificationsForm,
  IFAQ,
  IFAQForm,
  IEditFAQForm,
} from "./interfaces";
import AppHelper from "@/helpers/appHelper";

export const apiRunConfigurationCommand = (id: string) =>
  InterceptorHelper.intercept(`/admin/run-admin-command/${id}`);

export const apiPostGeneralSettings = (data: IGeneralSettingsForm | IGeneralSettingsOtherForm) =>
  InterceptorHelper.intercept(`/admin/common-settings`, {
    method: "Post",
    body: JSON.stringify(data),
  });

export const apiPostGeneralSettingsEmail = (data: IGeneralSettingsEmailForm) =>
  InterceptorHelper.intercept(`/admin/email-save-settings`, {
    method: "Post",
    body: JSON.stringify(data),
  });

export const apiPostGeneralSettingsTwilio = (data: IGeneralSettingsTwilioForm) =>
  InterceptorHelper.intercept(`/admin/sms-save-settings`, {
    method: "Post",
    body: JSON.stringify(data),
  });

export const apiPostGeneralSettingsDefaultCoin = (data: IGeneralSettingsDefaultToken) =>
  InterceptorHelper.intercept(`/admin/withdrawal-settings`, {
    method: "Post",
    body: JSON.stringify(data),
  });

export const apiPostGeneralSettingsReferral = (data: IGeneralReferralSettingsForm) =>
  InterceptorHelper.intercept(`/admin/referral-fees-settings`, {
    method: "Post",
    body: JSON.stringify(data),
  });

export const apiPostGeneralSettingsPayment = (data: IGeneralSettingsPaymentForm) =>
  InterceptorHelper.intercept(`/admin/save-payment-settings`, {
    method: "Post",
    body: JSON.stringify(data),
  });

export const apiPostGeneralSettingsKyc = (data: IGeneralKycSettingsForm) =>
  InterceptorHelper.intercept(`/admin/save-kyc-settings`, {
    method: "Post",
    body: JSON.stringify(data),
  });

export const apiPostFeatureSettings = (data: IFeatureSettingsForm) =>
  InterceptorHelper.intercept(`/admin/feature-settings`, {
    method: "Post",
    body: JSON.stringify(data),
  });

export const apiPostPaymentMethodsSettings = (data: {active_id: IPaymentMethodsForm}) =>
  InterceptorHelper.intercept(`/admin/change-payment-methods`, {
    method: "Post",
    body: JSON.stringify(data),
  });

export const apiGetGeneralSettings = () =>
  InterceptorHelper.intercept<{settings: IGeneralSettings}>(`/admin/general-settings`);

export const apiSendNotification = (data: ISendNotificationsForm) =>
  InterceptorHelper.intercept<{message: string}>(`/admin/send-notification-process`, {
    method: "Post",
    body: JSON.stringify(data),
  });

export const apiGetFAQList = ({limit, page, search}: IQueryParams) => {
  const data = AppHelper.urlSearchParams({
    page,
    length: limit,
    "search[value]": search,
    searchableFields: '["question"]',
  });

  return InterceptorHelper.intercept<IResponse<IFAQ[]>>(`/admin/faq-list?${data}`);
};

export const apiCreateFaq = (data: IFAQForm) =>
  InterceptorHelper.intercept(`/admin/faq-save`, {
    method: "POST",
    body: JSON.stringify(data),
  });

export const apiEditFaq = (data: IEditFAQForm) =>
  InterceptorHelper.intercept(`/admin/faq-save`, {
    method: "POST",
    body: JSON.stringify(data),
  });

export const apiDeleteFaq = (url: string) => InterceptorHelper.intercept(url, {}, false);
