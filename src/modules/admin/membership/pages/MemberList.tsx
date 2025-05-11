import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import useQuery from "@/hooks/useQuery";

import useApiUrlFilter from "@/hooks/useApiUrlFilter";

import {apiGetMembersList} from "../services";
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

export const Component = () => {
  usePageTitle("Member List");

  const {
    pageSearchParams: page,
    limitSearchParams: limit,
    searchSearchParams: search,
  } = useApiUrlFilter();
  const {data, isLoading} = useQuery({
    queryFn: () => apiGetMembersList(page, limit, search),
    queryKey: ["admin-get-members", page, limit, search],
  });

  const totalPages = data?.recordsTotal ? Math.ceil(data.recordsTotal / limit) : 1;

  return (
    <TransitionPage>
      <div className='w-[450px] max-w-full'>
        <Search placeholder='Search in Member List' />
      </div>
      <div className='mt-2rem'>
        <Box>
          <TableBoxedLayoutContainer>
            <TableBoxedLayoutTHead>
              <TableBoxedLayoutTR>
                <TableBoxedLayoutTH>Member</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Plan Name </TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Blocked Coin </TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Bonus Coin </TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Start Date </TableBoxedLayoutTH>
                <TableBoxedLayoutTH>End Date</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Updated At</TableBoxedLayoutTH>
              </TableBoxedLayoutTR>
            </TableBoxedLayoutTHead>

            <TableBoxedLayoutTBody>
              {isLoading
                ? Array.from({length: 10}).map((_, index) => (
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
                : data?.data.map((item, index) => (
                    <TableBoxedLayoutTR key={index}>
                      <TableBoxedLayoutTD>{item.email}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.plan_name}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.amount}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.bonus}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        {dayjs(item.start_date).format("MMMM D, YYYY h:mm A")}
                      </TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        {dayjs(item.end_date).format("MMMM D, YYYY h:mm A")}
                      </TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        <Status status={item.status} />
                      </TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        {dayjs(item.created_at).format("MMMM D, YYYY h:mm A")}
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
      </div>
    </TransitionPage>
  );
};

Component.displayName = "CoinsPage";
