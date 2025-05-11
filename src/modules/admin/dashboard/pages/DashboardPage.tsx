import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import StatsBox from "../components/StatsBox";

import DepositAndWithdrawal from "../components/DepositAndWithdrawal";

import Users from "../components/Users";

// import DailySales from "../components/DailySales";

// import TotalOrders from "../components/TotalOrders";

import useQuery from "@/hooks/useQuery";

import {apiGetDashboardData} from "../services";

import {useMemo} from "react";

import LoadingScreen from "@/components/LoadingScreen";

export const Component = () => {
  usePageTitle("Dashboard");

  const {data, isLoading} = useQuery({
    queryFn: apiGetDashboardData,
    queryKey: ["admin-dashboard-data"],
  });

  const dashboardData = useMemo(() => data, [data]);

  const handelNumber = (value: number) => {
    return +Number(value).toFixed(2);
  };

  return (
    <TransitionPage>
      {isLoading ? (
        <LoadingScreen />
      ) : dashboardData ? (
        <>
          <div className='mb-2rem grid grid-cols-1 gap-1.5rem lg:grid-cols-3'>
            <StatsBox
              title='Total Sold Coin'
              value={handelNumber(dashboardData.total_sold_coin) || 0}
              className='bg-base-300'
            />
            <StatsBox
              title='Total Blocked Coin'
              value={handelNumber(dashboardData.total_blocked_coin) || 0}
              className='bg-base-300'
            />
            <StatsBox
              title='Total User'
              value={handelNumber(dashboardData.total_user) || 0}
              className='bg-base-300'
            />
            <StatsBox
              title='Total Membership'
              value={handelNumber(dashboardData.total_member) || 0}
              className='bg-base-300'
            />
            <StatsBox
              title='Total Distributed Bonus'
              value={handelNumber(dashboardData.bonus_distribution) || 0}
              className='bg-base-300'
            />
            <StatsBox
              title='Total Revenue'
              value={handelNumber(dashboardData.total_income) || 0}
              className='bg-base-300'
            />
          </div>

          <div className='grid grid-cols-1 gap-6 xl:grid-cols-3'>
            <DepositAndWithdrawal
              withdrawals={Object.values(dashboardData?.monthly_withdrawal)}
              deposits={Object.values(dashboardData?.monthly_deposit)}
            />
            <Users
              active={dashboardData.active_percentage}
              inactive={dashboardData.inactive_percentage}
            />
          </div>

          {/* <div className='grid gap-6 mt-2rem xl:grid-cols-2'>
            <DailySales />
            <TotalOrders />
          </div> */}
        </>
      ) : null}
    </TransitionPage>
  );
};

Component.displayName = "DashboardPage";
