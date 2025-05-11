import {RouteObject} from "react-router";

export default [
  {
    path: "orders",
    lazy: () => import("./pages/BuyCoinOrdersPage"),
  },
  {
    path: "orders-give-coin-history",
    lazy: () => import("./pages/GiveCoinHistoryPage"),
  },
] as RouteObject[];
