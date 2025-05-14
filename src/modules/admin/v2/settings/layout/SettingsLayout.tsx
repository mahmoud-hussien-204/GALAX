import {Outlet} from "react-router";

import GeneralSettingsProvider from "../providers/GeneralSettingsProvider";

export const Component = () => {
  return (
    <GeneralSettingsProvider>
      <Outlet />
    </GeneralSettingsProvider>
  );
};

Component.displayName = "SettingsLayout";
