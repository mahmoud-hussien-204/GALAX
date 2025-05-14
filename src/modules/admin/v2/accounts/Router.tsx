import {RouteObject} from "react-router";

export default [
  {
    path: "accounts",
    lazy: () => import("./layout/AccountsLayout"),
    children: [
      {
        path: "cars",
        index: true,
        lazy: () => import("./pages/CarsPage"),
      },
      {
        path: "all-business-listing",
        index: true,
        lazy: () => import("./pages/AllBusinessListingPage"),
      },
      {
        path: "recovery-listing",
        index: true,
        lazy: () => import("./pages/RecoveryListing"),
      },
      {
        path: "spare-parts",
        index: true,
        lazy: () => import("./pages/SpareParts"),
      },
      {
        path: "garage-listing",
        index: true,
        lazy: () => import("./pages/GarageListing"),
      },
    ],
  },
] as RouteObject[];
