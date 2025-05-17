import {RouteObject} from "react-router";

import dashboardRoutes from "./dashboard/Router";

import usersRoutes from "./users/Router";

import coinsRoutes from "./coins/Router";

import buyCoinOrdersRoutes from "./buyCoinOrders/Router";

import walletsRoutes from "./wallets/Router";

import transactionsRoutes from "./transactions/Router";

import membershipRoutes from "./membership/Router";

import bankManagementRoutes from "./bankManagement/Router";

import profileRoutes from "./profile/Router";

// new routes
import salesRoutes from "./v2/sales/Router";
import accountsRoutes from "./v2/accounts/Router";

import settingsRoutes from "./v2/settings/Router";

export default [
  {
    path: "/admin",
    children: [
      // **** new routes ****
      ...salesRoutes,
      ...accountsRoutes,
      ...settingsRoutes,

      // **** old routes from old project ****
      ...dashboardRoutes,
      ...usersRoutes,
      ...coinsRoutes,
      ...buyCoinOrdersRoutes,
      ...walletsRoutes,
      ...transactionsRoutes,
      ...membershipRoutes,
      ...bankManagementRoutes,
      ...profileRoutes,
    ],
  },
] as RouteObject[];
