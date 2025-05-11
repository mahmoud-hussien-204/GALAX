import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import Box from "@/components/Box";

import PageLimit from "@/components/PageLimit";

import Pagination from "@/components/Pagination";

import {
  TableBoxedLayoutContainer,
  TableBoxedLayoutSkeleton,
  TableBoxedLayoutTBody,
  TableBoxedLayoutTD,
  TableBoxedLayoutTH,
  TableBoxedLayoutTHead,
  TableBoxedLayoutTR,
} from "@/components/TableBoxedLayout";

import dayjs from "dayjs";

import Search from "@/components/Search";

import useApiUrlFilter from "@/hooks/useApiUrlFilter";

import useQuery from "@/hooks/useQuery";

import {apigetAdminWallets} from "../services";

import PageFilterSelect from "@/components/PageFilterSelect";

import {constantTypeWallets} from "../constants";

import {ENUM_WALLET_TYPE} from "../enums";

import {Navigate} from "react-router";

import DataNotFound from "@/components/DataNotFound";

export const Component = () => {
  usePageTitle("Wallets");
  const {
    filterSearchParams: path,
    pageSearchParams: page,
    limitSearchParams: limit,
    searchSearchParams: search,
  } = useApiUrlFilter();

  const {data, isLoading} = useQuery({
    queryFn: () => apigetAdminWallets(path as ENUM_WALLET_TYPE, page, limit, search),
    queryKey: ["admin-wallets", path, page, limit, search],
    enabled: !!path,
  });

  if (!path) {
    return <Navigate to={`?filter=${ENUM_WALLET_TYPE.PERSONAL_WALLET}`} />;
  }

  const totalPages = data?.recordsTotal ? Math.ceil(data.recordsTotal / limit) : 1;

  return (
    <TransitionPage>
      <div className='flex flex-wrap items-center gap-1.5rem'>
        <div className='w-full max-w-full sm:w-[450px]'>
          <Search placeholder='Search in wallets' />
        </div>
        <PageFilterSelect options={constantTypeWallets} />
      </div>
      <div className='mt-2rem'>
        <Box>
          <TableBoxedLayoutContainer>
            <TableBoxedLayoutTHead>
              <TableBoxedLayoutTR>
                <TableBoxedLayoutTH>Name</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Coin Type</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Balance</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>User Name</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>User Email</TableBoxedLayoutTH>
                <TableBoxedLayoutTH>Updated at</TableBoxedLayoutTH>
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
                data?.data.map((item, index) => (
                  <TableBoxedLayoutTR key={index}>
                    <TableBoxedLayoutTD>{item.name}</TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>{item.coin_type}</TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>{item.balance}</TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>
                      {item.first_name} {item.last_name}
                    </TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>{item.email}</TableBoxedLayoutTD>
                    <TableBoxedLayoutTD>
                      {dayjs(item.created_at).format("MMMM D, YYYY h:mm A")}
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
      </div>
    </TransitionPage>
  );
};

Component.displayName = "WalletsPage";
