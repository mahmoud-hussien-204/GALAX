import { RouteObject } from "react-router";

export default [
  {
    index: true,
    lazy: () => import("./pages/DashboardPage"),
  },
] as RouteObject[];
