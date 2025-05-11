import Tabs from "@/components/Tabs";

import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import {Navigate, Outlet, useLocation} from "react-router-dom";

import {constantProfileTabs} from "../constants";

export const Component = () => {
  usePageTitle("Settings");

  const {pathname} = useLocation();

  if (pathname.endsWith("/profile")) return <Navigate to='edit-profile' />;

  return (
    <TransitionPage>
      <div className='mb-1.5rem'>
        <Tabs
          to={(tab) => ({
            pathname: (tab as (typeof constantProfileTabs)[number]).value,
          })}
          tabs={constantProfileTabs}
        />
      </div>
      <Outlet />
    </TransitionPage>
  );
};

Component.displayName = "ProfileLayout";
