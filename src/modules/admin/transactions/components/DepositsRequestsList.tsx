import Box from "@/components/Box";

import CopyText from "@/components/CopyText";

import PageLimit from "@/components/PageLimit";

import Pagination from "@/components/Pagination";

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

import {apiGetDepositRequests} from "../services";

import useApiUrlFilter from "@/hooks/useApiUrlFilter";
import DataNotFound from "@/components/DataNotFound";

const DepositsRequestsList = () => {
  const {
    pageSearchParams: page,
    limitSearchParams: limit,
    searchSearchParams: search,
    filterSearchParams: filter,
  } = useApiUrlFilter();

  const {data, isLoading} = useQuery({
    queryFn: () => apiGetDepositRequests(page, limit, search, filter),
    queryKey: ["admin-get-deposits-request", page, limit, search, filter],
  });

  console.log(data);

  const totalPages = data?.recordsTotal ? Math.ceil(data.recordsTotal / limit) : 1;

  return (
    <Box>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>Amount</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>From Address</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>To Address</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>TX Hash</TableBoxedLayoutTH>
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
              </TableBoxedLayoutTR>
            ))
          ) : Array.isArray(data?.data) && data?.data.length > 0 ? (
            data?.data.map((item) => (
              <TableBoxedLayoutTR key={item.id}>
                <TableBoxedLayoutTD>{item.amount}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <CopyText text={item.from_address} />
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <CopyText text={item.address} />
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <CopyText text={item.transaction_id} />
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
            <DataNotFound colSpan={6} />
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

export default DepositsRequestsList;
