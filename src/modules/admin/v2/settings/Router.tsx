import {RouteObject} from "react-router";

export default [
  {
    path: "settings",
    lazy: () => import("./layout/SettingsLayout"),
    children: [
      {
        path: "",
        index: true,
        lazy: () => import("./pages/GeneralPage"),
      },
      {
        path: "general",
        lazy: () => import("./pages/GeneralPage"),
      },
      {
        path: "security",
        lazy: () => import("./pages/SecurityPage"),
      },
      {
        path: "profile",
        lazy: () => import("./pages/ProfilePage"),
      },
    ],
  },
] as RouteObject[];
