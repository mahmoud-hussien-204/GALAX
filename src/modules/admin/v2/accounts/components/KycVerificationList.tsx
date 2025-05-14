import Status from "@/components/Status";

import {
  TableBoxedLayoutActionButtonView,
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

import DataNotFound from "@/components/DataNotFound";

import useQuery from "@/hooks/useQuery";

import {apiGetKycList} from "../services";

import useApiUrlFilter from "@/hooks/useApiUrlFilter";

const KycVerificationList = () => {
  const {limitSearchParams, pageSearchParams, searchSearchParams} = useApiUrlFilter();

  const {data, isLoading} = useQuery({
    queryFn: () =>
      apiGetKycList({
        limit: limitSearchParams,
        page: pageSearchParams,
        search: searchSearchParams,
      }),
    queryKey: ["admin-get-kyc-list"],
  });

  const totalPages = data?.recordsTotal ? Math.ceil(data.recordsTotal / limitSearchParams) : 1;

  const kycVerificationsList = data?.data || [];

  return (
    <Box>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>First Name</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Last Name</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Email</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Created at</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Actions</TableBoxedLayoutTH>
          </TableBoxedLayoutTR>
        </TableBoxedLayoutTHead>

        <TableBoxedLayoutTBody>
          {isLoading ? (
            Array.from({length: 10}).map((_, index) => (
              <TableBoxedLayoutTR key={index} className='!bg-red-300'>
                <TableBoxedLayoutSkeleton />
                <TableBoxedLayoutSkeleton />
                <TableBoxedLayoutSkeleton />
                <TableBoxedLayoutSkeleton />
                <TableBoxedLayoutSkeleton />
                <TableBoxedLayoutSkeleton />
              </TableBoxedLayoutTR>
            ))
          ) : kycVerificationsList.length > 0 ? (
            kycVerificationsList.map((item) => (
              <TableBoxedLayoutTR key={item.id}>
                <TableBoxedLayoutTD>{item.first_name}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.last_name}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.email}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <Status status={item.deposit_status} />
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  {dayjs(item.created_at).format("MMMM D, YYYY h:mm A")}
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <TableBoxedLayoutActions>
                    {item.action.Details && (
                      <TableBoxedLayoutActionButtonView
                        data={{...item, className: "max-w-[50rem]"}}
                      />
                    )}
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

export default KycVerificationList;
