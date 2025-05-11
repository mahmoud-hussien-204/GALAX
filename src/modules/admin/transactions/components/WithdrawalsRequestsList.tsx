import Box from "@/components/Box";

import CopyText from "@/components/CopyText";

import PageLimit from "@/components/PageLimit";

import Pagination from "@/components/Pagination";

import Status from "@/components/Status";

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

import useQuery from "@/hooks/useQuery";

import dayjs from "dayjs";

import {apiGetPendingWithdrawal} from "../services";

import useApiUrlFilter from "@/hooks/useApiUrlFilter";

import DataNotFound from "@/components/DataNotFound";

const WithdrawalsRequestsList = () => {
  const {
    pageSearchParams: page,
    limitSearchParams: limit,
    searchSearchParams: search,
    filterSearchParams: filter,
  } = useApiUrlFilter();

  const {data, isLoading} = useQuery({
    queryFn: () => apiGetPendingWithdrawal(page, limit, search, filter),
    queryKey: ["admin-get-pending-withdrawal", page, limit, search, filter],
  });

  const totalPages = data?.recordsTotal ? Math.ceil(data.recordsTotal / limit) : 1;

  return (
    <Box>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>Sender</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Coin Type</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Type</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Amount</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Address</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Receiver</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Fees</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Transaction ID</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Updated at</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Actions</TableBoxedLayoutTH>
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
          ) : Array.isArray(data?.data) && data?.data.length > 0 ? (
            data?.data.map((item) => (
              <TableBoxedLayoutTR key={item.id}>
                <TableBoxedLayoutTD>{item.sender}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.coin_type}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.address_type}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.amount}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <CopyText text={item.address} />
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <Status status={item.deposit_status} />
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.receiver}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.fees}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <CopyText text={item.transaction_hash} />
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  {dayjs(item.updated_at).format("MMMM D, YYYY h:mm A")}
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <TableBoxedLayoutActions>
                    {item.action.Accept && <TableBoxedLayoutActionButtonAccept data={item} />}
                    {item.action.Reject && <TableBoxedLayoutActionButtonReject data={item} />}
                  </TableBoxedLayoutActions>
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
  );
};

export default WithdrawalsRequestsList;
