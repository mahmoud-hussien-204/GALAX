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

import {getAllCoinTransactionHistory} from "../services";

import PageFilterSelect from "@/components/PageFilterSelect";

import {constantAllTransactions} from "../constants";

import {Navigate} from "react-router";

import {ENUM_ALL_TRANSACTIONS} from "../enums";

import CopyText from "@/components/CopyText";

import DataNotFound from "@/components/DataNotFound";

export const Component = () => {
  usePageTitle("All Coin Transaction History");

  const {
    pageSearchParams: page,
    limitSearchParams: limit,
    searchSearchParams: search,
    filterSearchParams: path,
  } = useApiUrlFilter();
  const {data, isLoading} = useQuery({
    queryFn: () => getAllCoinTransactionHistory(path as ENUM_ALL_TRANSACTIONS, page, limit, search),
    queryKey: ["admin-get-bonus-distribution", path, page, limit, search],
    enabled: !!path,
  });

  if (!path) {
    return <Navigate to={`?filter=${ENUM_ALL_TRANSACTIONS.DEPOSITS}`} />;
  }

  const totalPages = data?.recordsTotal ? Math.ceil(data.recordsTotal / limit) : 1;

  return (
    <TransitionPage>
      <div className='flex flex-wrap items-center gap-1.5rem'>
        <div className='w-full max-w-full sm:w-[450px]'>
          <Search placeholder='Search in Bonus Distribution' />
        </div>

        <PageFilterSelect options={constantAllTransactions} />
      </div>
      <div className='mt-2rem'>
        <Box>
          <TableBoxedLayoutContainer>
            <TableBoxedLayoutTHead>
              <TableBoxedLayoutTR>
                <TableBoxedLayoutTH>Type</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Sender</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Coin Type</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Address</TableBoxedLayoutTH>

                <TableBoxedLayoutTH>Reciver</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Amount </TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Fees </TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Transaction ID</TableBoxedLayoutTH>
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
                    <TableBoxedLayoutSkeleton />
                    <TableBoxedLayoutSkeleton />
                    <TableBoxedLayoutSkeleton />
                  </TableBoxedLayoutTR>
                ))
              ) : data?.data.length ? (
                data?.data.map((item, index) => (
                  <TableBoxedLayoutTR key={index}>
                    <TableBoxedLayoutTD>{item.address_type}</TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>{item.sender}</TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>{item.type}</TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>
                      <CopyText text={item.address} />
                    </TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>{item.receiver}</TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>{item.amount}</TableBoxedLayoutTD>

                    <TableBoxedLayoutTD>{item.fees}</TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>
                      <CopyText text={item.transaction_id || item.transaction_hash} />
                    </TableBoxedLayoutTD>

                    <TableBoxedLayoutTD>
                      <Status status={String(item.deposit_status)} />
                    </TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>
                      {dayjs(item.created_at).format("MMMM D, YYYY h:mm A")}
                    </TableBoxedLayoutTD>
                  </TableBoxedLayoutTR>
                ))
              ) : (
                <DataNotFound colSpan={11} />
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
