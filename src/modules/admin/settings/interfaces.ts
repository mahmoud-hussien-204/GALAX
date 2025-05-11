export type IGeneralSettings =
  | {
      settings: Settings;
      token_api_type: TokenApiType;
    }
  | undefined;

export interface Settings {
  chain_id: string;
  coin_price: number;
  coin_name: string;
  app_title: string;
  maximum_withdrawal_daily: string;
  mail_from: string;
  admin_coin_address: string;
  base_coin_type: string;
  minimum_withdrawal_amount: string;
  maximum_withdrawal_amount: string;
  maintenance_mode: string;
  logo: string;
  login_logo: string;
  landing_logo: string;
  favicon: string;
  copyright_text: string;
  pagination_count: string;
  point_rate: string;
  lang: string;
  company_name: string;
  primary_email: string;
  sms_getway_name: string;
  twillo_secret_key: string;
  twillo_auth_token: string;
  twillo_number: number;
  ssl_verify: string;
  mail_driver: string;
  mail_host: string;
  mail_port: number;
  mail_username: string;
  mail_password: string;
  mail_encryption: string;
  mail_from_address: string;
  braintree_client_token: string;
  braintree_environment: string;
  braintree_merchant_id: string;
  braintree_public_key: string;
  braintree_private_key: string;
  clickatell_api_key: string;
  number_of_confirmation: number;
  referral_commission_percentage: string;
  referral_signup_reward: number;
  fees_level1: number;
  fees_level2: number;
  fees_level3: number;
  max_affiliation_level: string;
  coin_api_user: string;
  coin_api_pass: string;
  coin_api_host: string;
  coin_api_port: string;
  send_fees_type: string;
  send_fees_fixed: string;
  send_fees_percentage: string;
  max_send_limit: number;
  deposit_time: string;
  COIN_PAYMENT_PUBLIC_KEY: string;
  COIN_PAYMENT_PRIVATE_KEY: string;
  COIN_PAYMENT_CURRENCY: string;
  ipn_merchant_id: string;
  STRIPE_KEY: string;
  STRIPE_SECRET: string;
  ipn_secret: string;
  payment_method_coin_payment: string;
  payment_method_bank_deposit: string;
  membership_bonus_type: string;
  membership_bonus_fixed: string;
  membership_bonus_percentage: string;
  chain_link: string;
  contract_address: string;
  wallet_address: string;
  private_key: string;
  contract_decimal: number;
  gas_limit: number;
  contract_coin_name: string;
  kyc_enable_for_withdrawal: string;
  kyc_nid_enable_for_withdrawal: string;
  kyc_passport_enable_for_withdrawal: string;
  kyc_driving_enable_for_withdrawal: string;
  plan_minimum_amount: string;
  plan_maximum_amount: string;
  admin_send_default_maximum: number;
  admin_send_default_minimum: number;
  max_co_wallet_user: number;
  NOCAPTCHA_SECRET: string;
  co_wallet_withdrawal_user_approval_percentage: number;
  NOCAPTCHA_SITEKEY: string;
  swap_enabled: number;
  co_wallet_feature_active: number;
  google_recapcha: number;
  payment_method_stripe: number;
}

export interface TokenApiType {
  "4": string;
  "5": string;
  "6": string;
}

export interface IGeneralSettingsForm {
  lang: string;
  company_name: string;
  base_coin_type: string;
  copyright_text: string;
  number_of_confirmation: number;
}

export interface IGeneralSettingsOtherForm {
  admin_send_default_minimum: number;
  admin_send_default_maximum: number;
}

export interface IGeneralSettingsEmailForm {
  mail_host: string;
  mail_port: number;
  mail_username: string;
  mail_password: string;
  mail_encryption: string;
  mail_from_address: string;
}

export interface IGeneralSettingsTwilioForm {
  twillo_secret_key: string;
  twillo_auth_token: string;
  twillo_number: number;
}

export interface IGeneralSettingsPaymentForm {
  COIN_PAYMENT_PUBLIC_KEY: string;
  COIN_PAYMENT_PRIVATE_KEY: string;
  ipn_merchant_id: string;
  ipn_secret: string;
  STRIPE_KEY: string;
  STRIPE_SECRET: string;
}

export interface IGeneralSettingsDefaultToken {
  coin_name: string;
  coin_price: number;
  contract_coin_name: string;
  chain_link: string;
  chain_id: string;
  contract_address: string;
  wallet_address: string;
  private_key: string;
  contract_decimal: number;
  gas_limit: number;
  max_send_limit: number;
}

export interface IGeneralReferralSettingsForm {
  referral_signup_reward: number;
  fees_level1: number;
  fees_level2: number;
  fees_level3: number;
}

export interface IGeneralKycSettingsForm {
  kyc_enable_for_withdrawal: string;
  kyc_nid_enable_for_withdrawal: string;
  kyc_passport_enable_for_withdrawal: string;
  kyc_driving_enable_for_withdrawal: string;
}

export interface IFeatureSettingsForm {
  max_co_wallet_user: number;
  NOCAPTCHA_SECRET: string;
  co_wallet_withdrawal_user_approval_percentage: number;
  NOCAPTCHA_SITEKEY: string;
  swap_enabled: number | string;
  co_wallet_feature_active: number | string;
  google_recapcha: number | string;
}

export interface IPaymentMethodsForm {
  payment_method_coin_payment: number | string;
  payment_method_bank_deposit: number | string;
  payment_method_stripe: number | string;
}

export interface IConfigurationsItem {
  title: string;
  description: string;
  linkTitle: string;
  id: string;
}

export interface ISendNotificationsForm {
  title: string;
  notification_body: string;
}

export interface IFAQ {
  question: string;
  answer: string;
  id: number;
  status: string;
  updated_at: string;
  action: {
    Delete: string;
    Edit: string;
  };
}

export interface IFAQForm {
  question: string;
  answer: string;
  status: number;
}

export interface IEditFAQForm extends IFAQForm {
  edit_id: number;
}
