import Status from "@/components/Status";

import {
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

import {IPlanData} from "../interfaces";

interface IProps {
  plans: IPlanData[];
  isLoading: boolean;
  totalPages: number;
}

const UsersList = ({isLoading, plans, totalPages}: IProps) => {
  return (
    <Box>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>Plan Name </TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Minimum Amount</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Duration</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Bonus</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Bonus Type</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Bonus Coin Type</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Created at</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Actions</TableBoxedLayoutTH>
          </TableBoxedLayoutTR>
        </TableBoxedLayoutTHead>

        <TableBoxedLayoutTBody>
          {isLoading
            ? Array.from({length: 10}).map((_, index) => (
                <TableBoxedLayoutTR key={index} className='!bg-red-300'>
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
            : plans.map((item) => (
                <TableBoxedLayoutTR key={item.id}>
                  <TableBoxedLayoutTD>{item.plan_name}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>{item.amount}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>{item.duration}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>{item.bonus}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>{item.bonus_type}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>{item.bonus_coin_type}</TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>
                    <Status status={item.status} />
                  </TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>
                    {dayjs(item.created_at).format("MMMM D, YYYY h:mm A")}
                  </TableBoxedLayoutTD>
                  <TableBoxedLayoutTD>
                    <TableBoxedLayoutActions>
                      {item.action.edit_url && <TableBoxedLayoutActionButtonEdit data={item} />}
                    </TableBoxedLayoutActions>
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
  );
};

export default UsersList;
