import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import Modal from "@/components/Modal";

import useQuery from "@/hooks/useQuery";

import {apiGetPromoCodes} from "../services";

import Head from "../components/Head";

import CreatePromoCodeForm from "../components/CreatePromoCodeForm";

import EditPromoCodeForm from "../components/EditPromoCodeForm";

import DeletePromoCodeForm from "../components/DeletePromoCodeForm";

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

import DataNotFound from "@/components/DataNotFound";

export const Component = () => {
  usePageTitle("Promotion Code");

  const {data, isLoading} = useQuery({
    queryFn: apiGetPromoCodes,
    queryKey: ["admin-get-promo-code"],
  });

  const promoCodesList = data?.data || [];

  const totalPages = 1;

  return (
    <ModalProvider>
      <TransitionPage>
        <Head />
        <div className='mt-2rem'>
          <Box>
            <TableBoxedLayoutContainer>
              <TableBoxedLayoutTHead>
                <TableBoxedLayoutTR>
                  <TableBoxedLayoutTH>Name</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Value</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Max Usage</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Current Usage</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Created at</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Updated at</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Actions</TableBoxedLayoutTH>
                </TableBoxedLayoutTR>
              </TableBoxedLayoutTHead>

              <TableBoxedLayoutTBody>
                {isLoading ? (
                  Array.from({length: 3}).map((_, index) => (
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
                ) : promoCodesList.length > 0 ? (
                  promoCodesList.map((item) => (
                    <TableBoxedLayoutTR key={item.id}>
                      <TableBoxedLayoutTD>{item.name}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.value}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.max_usage}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.current_usage}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        {dayjs(item.created_at).format("MMMM D, YYYY h:mm A")}
                      </TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        {dayjs(item.updated_at).format("MMMM D, YYYY h:mm A")}
                      </TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        <TableBoxedLayoutActions>
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
        </div>
      </TransitionPage>
      <Modal add={CreatePromoCodeForm} edit={EditPromoCodeForm} delete={DeletePromoCodeForm} />
    </ModalProvider>
  );
};

Component.displayName = "PromoCodePage";
