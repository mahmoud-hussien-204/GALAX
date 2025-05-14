import Tabs from "@/components/Tabs";

import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import {Outlet} from "react-router-dom";

import {constantSettingsGeneralTabs} from "../constants";

export const Component = () => {
  usePageTitle("Settings");

  return (
    <TransitionPage>
      <div className='mb-1.5rem'>
        <Tabs
          to={(tab) => ({
            pathname: (tab as (typeof constantSettingsGeneralTabs)[number]).value,
          })}
          tabs={constantSettingsGeneralTabs}
        />
      </div>
      <Outlet />
    </TransitionPage>
  );
};

Component.displayName = "SettingsLayout";
