import InterceptorHelper from "@/helpers/interceptorHelper";

import {IEditProfile, IUpdatePassword, IUpdatePhotoResponse} from "./interfaces";

export const apiUpdateUserProfile = async (values: IEditProfile) => {
  return InterceptorHelper.intercept("/admin/user-profile-update", {
    body: JSON.stringify(values),
    method: "POST",
  });
};

export const apiUploadProfilePhoto = async (values: FormData) => {
  return InterceptorHelper.intercept<IResponse<IUpdatePhotoResponse>>(
    "/admin/upload-profile-image",
    {
      body: values,
      method: "POST",
    }
  );
};

export const apiChangePassword = async (values: IUpdatePassword) => {
  return InterceptorHelper.intercept("/admin/change-password-save", {
    body: JSON.stringify(values),
    method: "POST",
  });
};
