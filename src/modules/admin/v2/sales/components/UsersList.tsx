import Status from "@/components/Status";

import {
  TableBoxedLayoutActionButtonActive,
  TableBoxedLayoutActionButtonDelete,
  TableBoxedLayoutActionButtonEdit,
  TableBoxedLayoutActionButtonEmailVerify,
  TableBoxedLayoutActionButtonPhoneVerify,
  TableBoxedLayoutActionButtonSuspend,
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

import {IUserData} from "../interfaces";

import DataNotFound from "@/components/DataNotFound";

const UsersList = ({
  users,
  totalPages,
  isLoading,
}: {
  users: IUserData[];
  totalPages: number;
  isLoading: boolean;
}) => {
  return (
    <Box>
      <TableBoxedLayoutContainer>
        <TableBoxedLayoutTHead>
          <TableBoxedLayoutTR>
            <TableBoxedLayoutTH>User Name</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Email</TableBoxedLayoutTH>
            <TableBoxedLayoutTH>Role</TableBoxedLayoutTH>
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
          ) : users.length > 0 ? (
            users.map((item) => (
              <TableBoxedLayoutTR key={item.id}>
                <TableBoxedLayoutTD>
                  {item.first_name} {item.last_name}
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.email}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>{item.role == 1 ? "Admin" : "User"}</TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <Status status={item.status} />
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  {dayjs(item.created_at).format("MMMM D, YYYY h:mm A")}
                </TableBoxedLayoutTD>
                <TableBoxedLayoutTD>
                  <TableBoxedLayoutActions>
                    {item.action.View && <TableBoxedLayoutActionButtonView data={item} />}
                    {item.action.Edit && <TableBoxedLayoutActionButtonEdit data={item} />}
                    {item.action.Suspend && (
                      <TableBoxedLayoutActionButtonSuspend data={{path: item.action.Suspend}} />
                    )}
                    {item.action.Active && (
                      <TableBoxedLayoutActionButtonActive data={{path: item.action.Active}} />
                    )}
                    {item.action.Delete && (
                      <TableBoxedLayoutActionButtonDelete data={{path: item.action.Delete}} />
                    )}
                    {item.action.Phone_verify && (
                      <TableBoxedLayoutActionButtonPhoneVerify
                        data={{path: item.action.Phone_verify}}
                      />
                    )}
                    {item.action.Email_verify && (
                      <TableBoxedLayoutActionButtonEmailVerify
                        data={{path: item.action.Email_verify}}
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

export default UsersList;
