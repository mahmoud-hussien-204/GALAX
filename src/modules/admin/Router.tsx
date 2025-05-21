import {RouteObject} from "react-router";

// new routes
import promoCodesRoutes from "./v2/promoCode/Router";

import accountsRoutes from "./v2/accounts/Router";

import salesRoutes from "./v2/sales/Router";

import settingsRoutes from "./v2/settings/Router";

export default [
  {
    path: "/admin",
    children: [
      // **** new routes ****
      ...promoCodesRoutes,
      ...accountsRoutes,
      ...salesRoutes,
      ...settingsRoutes,
    ],
  },
] as RouteObject[];
