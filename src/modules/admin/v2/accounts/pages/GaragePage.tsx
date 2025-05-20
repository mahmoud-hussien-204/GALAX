import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import Modal from "@/components/Modal";

import useQuery from "@/hooks/useQuery";

import {apiGetGarageListing} from "../services";

import CreateGarageForm from "../components/garages/CreateGarageForm";

import Head from "../components/garages/Head";

import EditGarageForm from "../components/garages/EditGarageForm";

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

import DataNotFound from "@/components/DataNotFound";

import ViewGarageForm from "../components/garages/ViewGarageForm";

import DeleteGarageForm from "../components/garages/DeleteGarageForm";

export const Component = () => {
  usePageTitle("Garage Listing");

  const {data, isLoading} = useQuery({
    queryFn: apiGetGarageListing,
    queryKey: ["admin-get-garages"],
  });

  const garagesList = data?.data || [];

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
                  <TableBoxedLayoutTH>Garage Name</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Garage Email</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Garage Phone</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Expires at</TableBoxedLayoutTH>
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
                    </TableBoxedLayoutTR>
                  ))
                ) : garagesList.length > 0 ? (
                  garagesList.map((item) => (
                    <TableBoxedLayoutTR key={item.id}>
                      <TableBoxedLayoutTD>{item.garage_name}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.garage_email}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.garage_phone}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        <Status status={item.status} />
                      </TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        {dayjs(item.expires_at).format("MMMM D, YYYY h:mm A")}
                      </TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
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
        </div>
      </TransitionPage>
      <Modal
        add={CreateGarageForm}
        edit={EditGarageForm}
        view={ViewGarageForm}
        delete={DeleteGarageForm}
      />
    </ModalProvider>
  );
};

Component.displayName = "GaragePage";
