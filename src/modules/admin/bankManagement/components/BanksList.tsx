import {
  TableBoxedLayoutActionButtonDelete,
  TableBoxedLayoutActionButtonEdit,
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

import dayjs from "dayjs";

import Status from "@/components/Status";

import CopyText from "@/components/CopyText";

import useApiUrlFilter from "@/hooks/useApiUrlFilter";

import useQuery from "@/hooks/useQuery";

import {apiGetBankList} from "../services";

import {useMemo} from "react";

import DataNotFound from "@/components/DataNotFound";

const BanksList = () => {
  const {
    pageSearchParams: page,
    limitSearchParams: limit,
    searchSearchParams: search,
  } = useApiUrlFilter();

  const {data, isLoading} = useQuery({
    queryFn: () => apiGetBankList({page, limit, search}),
    queryKey: ["admin-get-banks-list", page, limit, search],
  });

  const totalPages = data?.recordsTotal ? Math.ceil(data.recordsTotal / limit) : 1;

  const banksData = useMemo(() => data?.data || [], [data]);

  return (
    <Box>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>Bank Name</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Holder Name</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>IBAN</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Country</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Created at</TableBoxedLayoutTH>
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
              </TableBoxedLayoutTR>
            ))
          ) : banksData.length > 0 ? (
            banksData.map((item) => (
              <TableBoxedLayoutTR key={item.id}>
                <TableBoxedLayoutTD>{item.bank_name}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.account_holder_name}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <CopyText text={item.iban} />
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.country_name}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <Status status={item.status} />
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  {dayjs(item.created_at).format("MMMM D, YYYY h:mm A")}
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <TableBoxedLayoutActions>
                    {item.action.Edit && <TableBoxedLayoutActionButtonEdit data={item} />}
                    {item.action.Delete && <TableBoxedLayoutActionButtonDelete data={item} />}
                  </TableBoxedLayoutActions>
                </TableBoxedLayoutTD>
              </TableBoxedLayoutTR>
            ))
          ) : (
            <DataNotFound colSpan={7} />
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

export default BanksList;
