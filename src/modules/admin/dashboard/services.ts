import InterceptorHelper from "@/helpers/interceptorHelper";

import {IDashboardData} from "./interfaces";

export const apiGetDashboardData = () => {
  return InterceptorHelper.intercept<IDashboardData>("/admin/dashboard");
};
