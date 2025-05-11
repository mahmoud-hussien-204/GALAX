import {RouteObject} from "react-router";

import dashboardRoutes from "./dashboard/Router";

import usersRoutes from "./users/Router";

import coinsRoutes from "./coins/Router";

import buyCoinOrdersRoutes from "./buyCoinOrders/Router";

import walletsRoutes from "./wallets/Router";

import transactionsRoutes from "./transactions/Router";

import membershipRoutes from "./membership/Router";

import bankManagementRoutes from "./bankManagement/Router";

import settingsRoutes from "./settings/Router";

import profileRoutes from "./profile/Router";

export default [
  {
    path: "/admin",
    children: [
      ...dashboardRoutes,
      ...usersRoutes,
      ...coinsRoutes,
      ...buyCoinOrdersRoutes,
      ...walletsRoutes,
      ...transactionsRoutes,
      ...membershipRoutes,
      ...bankManagementRoutes,
      ...settingsRoutes,
      ...profileRoutes,
    ],
  },
] as RouteObject[];
