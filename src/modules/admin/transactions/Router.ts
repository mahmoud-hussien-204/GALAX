import {RouteObject} from "react-router";

export default [
  {
    path: "default-coin-send-or-receive-history",
    lazy: () => import("./pages/DefaultCoinSendorReceiveHistory"),
  },
  {
    path: "all-coin-transaction-history",
    lazy: () => import("./pages/AllCoinTransactionHistory"),
  },
  {
    path: "transactions-withdrawals",
    lazy: () => import("./pages/WithdrawalsRequests"),
  },
  {
    path: "transactions-deposit",
    lazy: () => import("./pages/DepositsRequests"),
  },
  {
    path: "gas-sent-history",
    lazy: () => import("./pages/GasSentHistory"),
  },
  {
    path: "token-receive-history",
    lazy: () => import("./pages/TokenReceiveHistory"),
  },
] as RouteObject[];
