import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import useQuery from "@/hooks/useQuery";

import useApiUrlFilter from "@/hooks/useApiUrlFilter";

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

import {getDefaultCoinSendOrReceiveHistory} from "../services";

import DataNotFound from "@/components/DataNotFound";

export const Component = () => {
  usePageTitle("Default Coin Send or Receive History");

  const {
    pageSearchParams: page,
    limitSearchParams: limit,
    searchSearchParams: search,
  } = useApiUrlFilter();
  const {data, isLoading} = useQuery({
    queryFn: () => getDefaultCoinSendOrReceiveHistory(page, limit, search),
    queryKey: ["admin-get-bonus-distribution", page, limit, search],
  });

  const totalPages = data?.recordsTotal ? Math.ceil(data.recordsTotal / limit) : 1;

  return (
    <TransitionPage>
      <div className='w-full max-w-full sm:w-[450px]'>
        <Search placeholder='Search in Bonus Distribution' />
      </div>
      <div className='mt-2rem'>
        <Box>
          <TableBoxedLayoutContainer>
            <TableBoxedLayoutTHead>
              <TableBoxedLayoutTR>
                <TableBoxedLayoutTH>Sender</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Reciver</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Amount </TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Date</TableBoxedLayoutTH>
              </TableBoxedLayoutTR>
            </TableBoxedLayoutTHead>

            <TableBoxedLayoutTBody>
              {isLoading ? (
                Array.from({length: 10}).map((_, index) => (
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
              ) : Array.isArray(data?.data) && data?.data.length > 0 ? (
                data?.data.map((item, index) => (
                  <TableBoxedLayoutTR key={index}>
                    <TableBoxedLayoutTD>{item.sender_user_id}</TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>{item.receiver_user_id}</TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>{item.amount}</TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>
                      <Status status={String(item.deposit_status)} />
                    </TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>
                      {dayjs(item.created_at).format("MMMM D, YYYY h:mm A")}
                    </TableBoxedLayoutTD>
                  </TableBoxedLayoutTR>
                ))
              ) : (
                <DataNotFound colSpan={5} />
              )}
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

Component.displayName = "DefaultCoinSendorReceiveHistory";
