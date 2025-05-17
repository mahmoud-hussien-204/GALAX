export interface IGeneralSettings {
  app_name: string;
  app_logo: string;
  app_favicon: string;
  app_email: string;
  app_phone: string;
  app_address: string;
  app_city: string;
  ios_version: string;
  ios_app_id: string;
  ios_url: string;
  android_version: string;
  android_package_name: string;
  android_url: string;
  payment_enabled: true;
  stripe_secret_key: string;
  stripe_public_key: string;
  mail_host: string;
  mail_port: string;
  mail_username: string;
  mail_password: string;
  mail_encryption: string;
  mail_from_address: string;
  mail_from_name: string;
}

export type IGeneralSettingsForm = Partial<IGeneralSettings> & {app_name: string};

export interface IUpdatePassword {
  current_password: string;
  new_password: string;
  confirm_new_password?: string;
}

export interface IUpdateProfileInfoForm {
  name: string;
  email: string;
  phone: string;
  avatar: File | string;
}
