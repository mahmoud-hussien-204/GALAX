import {RouteObject} from "react-router";

// new routes
import accountsRoutes from "./v2/accounts/Router";

import salesRoutes from "./v2/sales/Router";
import accountsRoutes from "./v2/accounts/Router";

import settingsRoutes from "./v2/settings/Router";

export default [
  {
    path: "/admin",
    children: [
      // **** new routes ****
      ...accountsRoutes,
      ...salesRoutes,
      ...accountsRoutes,
      ...settingsRoutes,
    ],
  },
] as RouteObject[];
