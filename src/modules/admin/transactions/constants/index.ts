import {ENUM_ALL_TRANSACTIONS} from "../enums";

export const constantRequestStatus = [
  {
    label: "All",
    value: "",
    // disabled: true,
  },
  {
    label: "Pending",
    value: "Pending",
  },
  {
    label: "Accepted",
    value: "Accepted",
  },
  {
    label: "Rejected",
    value: "Rejected",
  },
];

export const constantAllTransactions = [
  {
    label: "Deposits",
    value: ENUM_ALL_TRANSACTIONS.DEPOSITS,
  },
  {
    label: "Withdrawal",
    value: ENUM_ALL_TRANSACTIONS.WITHDRAWAL,
  },
];
