import {RouteObject} from "react-router";

export default [
  {
    path: "settings",
    lazy: () => import("./layout/SettingsLayout"),
    children: [
      {
        path: "general",
        lazy: () => import("./layout/GeneralLayout"),
        children: [
          {
            path: "",
            index: true,
            lazy: () => import("./pages/general/GeneralPage"),
          },
          {
            path: "email",
            lazy: () => import("./pages/general/GeneralEmailPage"),
          },
          {
            path: "twilio",
            lazy: () => import("./pages/general/GeneralTwilioPage"),
          },
          {
            path: "default-token",
            lazy: () => import("./pages/general/GeneralDefaultCoinPage"),
          },
          {
            path: "referral",
            lazy: () => import("./pages/general/GeneralReferralPage"),
          },
          {
            path: "payment",
            lazy: () => import("./pages/general/GeneralPaymentPage"),
          },
          {
            path: "kyc",
            lazy: () => import("./pages/general/GeneralKYCPage"),
          },
        ],
      },
      {
        path: "feature",
        lazy: () => import("./pages/FeaturePage"),
      },
      {
        path: "payment-methods",
        lazy: () => import("./pages/PaymentMethodsPage"),
      },
      {
        path: "configuration",
        lazy: () => import("./pages/ConfigurationsPage"),
      },
      {
        path: "notifications",
        lazy: () => import("./pages/NotificationsPage"),
      },
      {
        path: "faq",
        lazy: () => import("./pages/FAQPage"),
      },
    ],
  },
] as RouteObject[];
