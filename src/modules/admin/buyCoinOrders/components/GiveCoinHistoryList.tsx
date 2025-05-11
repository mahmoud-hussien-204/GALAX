import {
  TableBoxedLayoutContainer,
  TableBoxedLayoutSkeleton,
  TableBoxedLayoutTBody,
  TableBoxedLayoutTD,
  TableBoxedLayoutTH,
  TableBoxedLayoutTHead,
  TableBoxedLayoutTR,
} from "@/components/TableBoxedLayout";

import Box from "@/components/Box";

import PageLimit from "@/components/PageLimit";

import Pagination from "@/components/Pagination";

import dayjs from "dayjs";

import useQuery from "@/hooks/useQuery";

import {apiGetGiveCoinHistory} from "../services";

import useApiUrlFilter from "@/hooks/useApiUrlFilter";

import {useMemo} from "react";

import DataNotFound from "@/components/DataNotFound";

const GiveCoinHistoryList = () => {
  const {limitSearchParams, pageSearchParams, searchSearchParams} = useApiUrlFilter();

  const {data, isLoading} = useQuery({
    queryKey: [
      "admin-get-give-coin-history",
      limitSearchParams,
      pageSearchParams,
      searchSearchParams,
    ],
    queryFn: () =>
      apiGetGiveCoinHistory({
        limit: limitSearchParams,
        page: pageSearchParams,
        search: searchSearchParams,
      }),
  });

  const totalPages = data?.recordsTotal ? Math.ceil(data.recordsTotal / limitSearchParams) : 1;

  const giveCoinHistoryList = useMemo(() => data?.data || [], [data]);

  return (
    <Box>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>User</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Wallet Name</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Given Coin Amount</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Date</TableBoxedLayoutTH>
          </TableBoxedLayoutTR>
        </TableBoxedLayoutTHead>

        <TableBoxedLayoutTBody>
          {isLoading ? (
            Array.from({length: 4}).map((_, index) => (
              <TableBoxedLayoutTR key={index} className='!bg-red-300'>
                <TableBoxedLayoutSkeleton />
                <TableBoxedLayoutSkeleton />
                <TableBoxedLayoutSkeleton />
                <TableBoxedLayoutSkeleton />
              </TableBoxedLayoutTR>
            ))
          ) : giveCoinHistoryList.length > 0 ? (
            giveCoinHistoryList.map((item) => (
              <TableBoxedLayoutTR key={item.id}>
                <TableBoxedLayoutTD>{item.email}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.wallet_id}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item?.amount}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  {dayjs(item?.created_at).format("MMMM D, YYYY h:mm A")}
                </TableBoxedLayoutTD>
              </TableBoxedLayoutTR>
            ))
          ) : (
            <DataNotFound colSpan={4} />
          )}
        </TableBoxedLayoutTBody>
      </TableBoxedLayoutContainer>

      <div className='mt-2rem flex items-center justify-between'>
        <PageLimit />
        <Pagination totalPages={totalPages} />
      </div>
    </Box>
  );
};

export default GiveCoinHistoryList;
