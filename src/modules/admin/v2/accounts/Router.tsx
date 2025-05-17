import {RouteObject} from "react-router";

export default [
  {
    path: "accounts",
    lazy: () => import("./layout/AccountsLayout"),
    children: [
      {
        path: "garage-listing",
        lazy: () => import("./pages/GaragePage"),
      },
    ],
  },
] as RouteObject[];
