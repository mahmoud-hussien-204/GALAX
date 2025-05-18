import Status from "@/components/Status";

import {
  TableBoxedLayoutActionButtonDelete,
  TableBoxedLayoutActionButtonEdit,
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

import {IRecoveryListing} from "../../interfaces";

import DataNotFound from "@/components/DataNotFound";

const RecoveryListingList = ({
  data,
  totalPages,
  isLoading,
}: {
  data: IRecoveryListing[];
  totalPages: number;
  isLoading: boolean;
}) => {
  return (
    <Box>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>Service Name</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Service Email</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Service Phone</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Service Address</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Service City</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Expires At</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
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
                <TableBoxedLayoutSkeleton />
              </TableBoxedLayoutTR>
            ))
          ) : data.length > 0 ? (
            data.map((item, index) => (
              <TableBoxedLayoutTR key={index}>
                <TableBoxedLayoutTD>{item.service_name}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.service_email}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.service_phone}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.service_address}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.service_city}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  {dayjs(item.expires_at).format("MMMM D, YYYY h:mm A")}
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <Status status={item.status} />
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD className='relative'>
                  <TableBoxedLayoutActions>
                    <TableBoxedLayoutActionButtonView data={item} />
                    <TableBoxedLayoutActionButtonEdit data={item} />
                    <TableBoxedLayoutActionButtonDelete data={item} />
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

export default RecoveryListingList;
