export const constantSettingsGeneralTabs = [
  {
    label: "General",
    value: "/admin/settings/general",
  },
  {
    label: "Email",
    value: "email",
  },
  {
    label: "Twilio",
    value: "Twilio",
  },
  {
    label: "Default Token",
    value: "default-token",
  },
  {
    label: "Referral",
    value: "referral",
  },
  {
    label: "Payment",
    value: "payment",
  },
  {
    label: "Kyc",
    value: "kyc",
  },
];

export const constantSettingsConfigurations = [
  {
    title: "Custom Token Deposit",
    description:
      "This command should run in your system every five minutes. It helps to deposit custom token. So try to run it every five minutes through scheduler. Otherwise you will miss user deposit",
    linkTitle: "Run Command",
    id: "10",
  },
  {
    title: "Adjust Custom Token Deposit",
    description:
      "This command should run in your system every ten minutes once. It also helps to deposit custom token. So try to run it every ten minutes through scheduler. Otherwise you will miss user deposit",
    linkTitle: "Run Command",
    id: "11",
  },
  {
    title: "Membership Bonus Distribution",
    description:
      "This command should run in your system everyday once. It helps to distribute membership bonus. So try to run it everyday once through scheduler. Otherwise your user will miss membership bonus",
    linkTitle: "Run Command",
    id: "12",
  },
  {
    title: "Clear Application Cache",
    description:
      "Clear all application cache by clicking this button and also you can run the cache clear command",
    linkTitle: "Cache Clear",
    id: "1",
  },
  {
    title: "Clear Application Config",
    description:
      "Reset or clear all configuration by clicking this button and also you can run the config clear command",
    linkTitle: "Config Clear",
    id: "2",
  },
  {
    title: "Clear Application View / Route",
    description: "By clicking this button you can clear the both view and route cache file",
    linkTitle: "View Clear",
    id: "4",
  },
  {
    title: "Run Migration",
    description: "Migrate all db file",
    linkTitle: "Migrate",
    id: "7",
  },
  {
    title: "Adjust Coin Wallet",
    description:
      "To adjust the coin at all wallet, you must run this command. Please click this button",
    linkTitle: "Adjust Wallet",
    id: "5",
  },
  {
    title: "Create Passport Client",
    description:
      "To create the personal access client, you must run this command. Please click this button or also run the command in terminal 'php artisan passport:install'",
    linkTitle: "Passport Install",
    id: "9",
  },
];
