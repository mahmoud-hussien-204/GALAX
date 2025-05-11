export interface IProfileGlobalSettings {
  lang: string;
}

export interface IUpdatePassword {
  password: string;
  new_password: string;
  confirm_new_password?: string;
}

export interface IEnableTwoFactorAuthentication {
  code: string;
}

export interface IEditProfile {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  gender: number;
}

export interface IPhoneVerification {
  code: string;
  phone: string;
}

export interface IUpdatePhotoResponse {
  image: string;
}
