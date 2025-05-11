import {RouteObject} from "react-router";

export default [
  {
    path: "profile",
    lazy: () => import("./layout/ProfileLayout"),
    children: [
      {
        path: "",
        lazy: () => import("./pages/EditProfilePage"),
        index: true,
      },
      {
        path: "edit-profile",
        lazy: () => import("./pages/EditProfilePage"),
      },
      {
        path: "security",
        lazy: () => import("./pages/SecurityPage"),
      },
    ],
  },
] as RouteObject[];
