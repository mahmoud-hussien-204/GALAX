import {RouteObject} from "react-router";

export default [
  {
    path: "wallets",
    lazy: () => import("./pages/WalletsPage"),
  },
] as RouteObject[];
