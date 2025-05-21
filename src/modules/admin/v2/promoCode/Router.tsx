import {RouteObject} from "react-router";

export default [
  {
    path: "promo-code",
    lazy: () => import("./pages/PromoCodePage"),
  },
] as RouteObject[];
