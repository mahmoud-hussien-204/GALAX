import {RouteObject} from "react-router";

export default [
  {
    path: "membership-plans",
    lazy: () => import("./pages/PlansPage"),
  },
  {
    path: "transaction-history",
    lazy: () => import("./pages/TransactionHistory"),
  },
  {
    path: "bonus-distribution",
    lazy: () => import("./pages/BonusDistribution"),
  },
  {
    path: "member-list",
    lazy: () => import("./pages/MemberList"),
  },
] as RouteObject[];
