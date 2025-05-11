import {createBrowserRouter} from "react-router-dom";

import ErrorLayout from "@/layouts/ErrorLayout";

import authRoutes from "@/modules/auth/Router";

import adminRoutes from "@/modules/admin/Router";

export const router = createBrowserRouter([
  {
    path: "*",
    lazy: () => import("@/layouts/NotFoundLayout"),
  },
  {
    path: "/access-denied",
    lazy: () => import("@/layouts/AccessDenied"),
  },
  {
    path: "/",
    lazy: () => import("@/layouts/RootLayout"),
    errorElement: <ErrorLayout />,
    children: [...adminRoutes],
  },
  ...authRoutes,
]);
