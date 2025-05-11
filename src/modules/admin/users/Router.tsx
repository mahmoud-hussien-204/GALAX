import {RouteObject} from "react-router";

export default [
  {
    path: "users",
    lazy: () => import("./pages/UsersPage"),
  },
  {
    path: "users-kyc-verification",
    lazy: () => import("./pages/KycVerificationPage"),
  },
] as RouteObject[];
