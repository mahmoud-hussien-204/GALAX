import {ENUM_USERS_STATUS} from "../enums";

export const constantUsersStatus = [
  {
    label: "Users Status",
    value: "",
    disabled: true,
  },
  {
    label: "Active Users",
    value: ENUM_USERS_STATUS.ACTIVE_USERS,
  },
  {
    label: "Suspended Users",
    value: ENUM_USERS_STATUS.SUSPEND_USER,
  },
  {
    label: "Deleted Users",
    value: ENUM_USERS_STATUS.DELETED_USER,
  },
  {
    label: "Email Pending",
    value: ENUM_USERS_STATUS.EMAIL_PENDING,
  },
  {
    label: "Phone Pending",
    value: ENUM_USERS_STATUS.PHONE_PENDING,
  },
];

export const userActions = ["Email_verify", "Phone_verify", "Delete", "Edit", "Suspend", "View"];
