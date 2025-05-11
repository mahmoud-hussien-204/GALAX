import {RouteObject} from "react-router";

export default [
  {
    path: "coins-list",
    lazy: () => import("./pages/CoinsPage"),
  },
] as RouteObject[];
