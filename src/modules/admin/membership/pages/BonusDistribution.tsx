import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import useQuery from "@/hooks/useQuery";

import useApiUrlFilter from "@/hooks/useApiUrlFilter";

import {apiDistributeMembershipBonus, apiGetMembersBonusDistribution} from "../services";
import {
  TableBoxedLayoutContainer,
  TableBoxedLayoutSkeleton,
  TableBoxedLayoutTBody,
  TableBoxedLayoutTD,
  TableBoxedLayoutTH,
  TableBoxedLayoutTHead,
  TableBoxedLayoutTR,
} from "@/components/TableBoxedLayout";

import Status from "@/components/Status";

import dayjs from "dayjs";

import Box from "@/components/Box";

import PageLimit from "@/components/PageLimit";

import Pagination from "@/components/Pagination";

import Search from "@/components/Search";

import Button from "@/components/Button";

import useMutation from "@/hooks/useMutation";

export const Component = () => {
  usePageTitle("Bonus Distribution");

  const {
    pageSearchParams: page,
    limitSearchParams: limit,
    searchSearchParams: search,
  } = useApiUrlFilter();
  const {data, isLoading} = useQuery({
    queryFn: () => apiGetMembersBonusDistribution(page, limit, search),
    queryKey: ["admin-get-bonus-distribution", page, limit, search],
  });

  const totalPages = data?.recordsTotal ? Math.ceil(data.recordsTotal / limit) : 1;

  const {mutate, isPending} = useMutation({
    mutationFn: () => apiDistributeMembershipBonus(),
  });

  return (
    <TransitionPage>
      <div className='flex flex-wrap items-center justify-between gap-1.25rem'>
        <div className='w-full max-w-full sm:w-[450px]'>
          <Search placeholder='Search in Bonus Distribution' />
        </div>

        <Button onClick={() => mutate(null)} isLoading={isPending}>
          Distribute Membership Bonus
        </Button>
      </div>
      <div className='mt-2rem'>
        <Box>
          <TableBoxedLayoutContainer>
            <TableBoxedLayoutTHead>
              <TableBoxedLayoutTR>
                <TableBoxedLayoutTH>Member</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Wallet Name </TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Plan Name </TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Bonus Amount </TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Coin Type </TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Date</TableBoxedLayoutTH>
              </TableBoxedLayoutTR>
            </TableBoxedLayoutTHead>

            <TableBoxedLayoutTBody>
              {isLoading
                ? Array.from({length: 10}).map((_, index) => (
                    <TableBoxedLayoutTR key={index}>
                      <TableBoxedLayoutSkeleton />
                      <TableBoxedLayoutSkeleton />
                      <TableBoxedLayoutSkeleton />
                      <TableBoxedLayoutSkeleton />
                      <TableBoxedLayoutSkeleton />
                      <TableBoxedLayoutSkeleton />
                      <TableBoxedLayoutSkeleton />
                    </TableBoxedLayoutTR>
                  ))
                : data?.data.map((item, index) => (
                    <TableBoxedLayoutTR key={index}>
                      <TableBoxedLayoutTD>{item.email}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.wallet_id}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.plan_id}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.bonus_amount}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.bonus_coin_type}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        <Status status={item.status} />
                      </TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        {dayjs(item.created_at).format("MMMM D, YYYY h:mm A")}
                      </TableBoxedLayoutTD>
                    </TableBoxedLayoutTR>
                  ))}
            </TableBoxedLayoutTBody>
          </TableBoxedLayoutContainer>

          <div className='mt-2rem flex items-center justify-between'>
            <PageLimit />
            <Pagination totalPages={totalPages} />
          </div>
        </Box>
      </div>
    </TransitionPage>
  );
};

Component.displayName = "CoinsPage";
