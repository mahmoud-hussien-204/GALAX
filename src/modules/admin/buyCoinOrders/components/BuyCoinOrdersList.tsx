import {
  TableBoxedLayoutActionButtonAccept,
  TableBoxedLayoutActionButtonReject,
  TableBoxedLayoutActions,
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

import Status from "@/components/Status";

import dayjs from "dayjs";

import CopyText from "@/components/CopyText";

import useQuery from "@/hooks/useQuery";

import {apiGetBuyCoinOrders} from "../services";

import useApiUrlFilter from "@/hooks/useApiUrlFilter";

import {useMemo} from "react";
import DataNotFound from "@/components/DataNotFound";

const BuyCoinOrdersList = () => {
  const {filterSearchParams, limitSearchParams, pageSearchParams, searchSearchParams} =
    useApiUrlFilter();

  const {data, isLoading} = useQuery({
    queryKey: [
      "admin-get-buy-coin-orders",
      filterSearchParams,
      limitSearchParams,
      pageSearchParams,
      searchSearchParams,
    ],
    queryFn: () =>
      apiGetBuyCoinOrders({
        filter: filterSearchParams,
        limit: limitSearchParams,
        page: pageSearchParams,
        search: searchSearchParams,
      }),
  });

  const totalPages = data?.recordsTotal ? Math.ceil(data.recordsTotal / limitSearchParams) : 1;

  const buyOrdersList = useMemo(() => data?.data || [], [data]);

  return (
    <Box>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>Email</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Amount</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Payable Coin</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Payment</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Address</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Date</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Actions</TableBoxedLayoutTH>
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
                <TableBoxedLayoutSkeleton />
                <TableBoxedLayoutSkeleton />
                <TableBoxedLayoutSkeleton />
                <TableBoxedLayoutSkeleton />
              </TableBoxedLayoutTR>
            ))
          ) : buyOrdersList.length > 0 ? (
            buyOrdersList.map((order) => (
              <TableBoxedLayoutTR key={order.id}>
                <TableBoxedLayoutTD>{order.email}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{order.coin}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{order.btc}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{order.payment_type}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <CopyText text={order?.address} />
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <Status status={order.deposit_status} />
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  {dayjs(order.created_at).format("MMMM D, YYYY h:mm A")}
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  {order.actions?.accept ||
                    (order.actions?.reject && (
                      <TableBoxedLayoutActions>
                        {order.actions?.accept && (
                          <TableBoxedLayoutActionButtonAccept data={order} />
                        )}
                        {order.actions?.reject && (
                          <TableBoxedLayoutActionButtonReject data={order} />
                        )}
                      </TableBoxedLayoutActions>
                    ))}
                </TableBoxedLayoutTD>
              </TableBoxedLayoutTR>
            ))
          ) : (
            <DataNotFound colSpan={8} />
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

export default BuyCoinOrdersList;
