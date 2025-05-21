import InterceptorHelper from "@/helpers/interceptorHelper";

import {ICreateGarageForm, IGarage, IEditGarageForm} from "./interfaces";

import AppHelper from "@/helpers/appHelper";

export const apiGetGarageListing = () =>
  InterceptorHelper.intercept<IResponse<IGarage[]>>("/garages");

export const apiCreateGarage = (data: ICreateGarageForm) => {
  const formData = AppHelper.toFormData(data);

  return InterceptorHelper.intercept(`/garages`, {
    method: "POST",
    body: formData,
  });
};

export const apiEditGarage = (data: Partial<IEditGarageForm>) => {
  const {id, ...rest} = data;

  const formData = AppHelper.toFormData(rest);

  return InterceptorHelper.intercept(`/garages/${id}`, {
    method: "POST",
    body: formData,
  });
};

export const apiDeleteGarage = (id: string) => {
  return InterceptorHelper.intercept(`/garages/${id}`, {
    method: "DELETE",
  });
};
