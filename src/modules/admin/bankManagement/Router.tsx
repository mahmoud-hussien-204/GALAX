import {RouteObject} from "react-router";

export default [
  {
    path: "bank-management",
    lazy: () => import("./pages/BankManagementPage"),
  },
] as RouteObject[];
