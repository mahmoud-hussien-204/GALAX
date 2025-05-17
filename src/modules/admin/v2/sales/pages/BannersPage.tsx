import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import Modal from "@/components/Modal";

import useQuery from "@/hooks/useQuery";

import {apiGetBanners} from "../services";

import CreateBannerForm from "../components/banners/CreateBannerForm";

import Head from "../components/banners/Head";

import EditBannerForm from "../components/banners/EditBannerForm";

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

import ViewBannerForm from "../components/banners/ViewBannerForm";
import DeleteForm from "../components/banners/DeleteForm";
import IconLink from "@/components/icons/IconLink";

export const Component = () => {
  usePageTitle("Banners");

  const {data, isLoading} = useQuery({
    queryFn: () => apiGetBanners(),
    queryKey: ["admin-get-banners"],
  });

  const bannersList = data?.data || [];

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
                  <TableBoxedLayoutTH>ID</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Title</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Link</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Status</TableBoxedLayoutTH>
                  <TableBoxedLayoutTH>Created at</TableBoxedLayoutTH>
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
                ) : bannersList.length > 0 ? (
                  bannersList.map((item) => (
                    <TableBoxedLayoutTR key={item.id}>
                      <TableBoxedLayoutTD>{item.id}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>{item.title}</TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        <a
                          href={item.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center gap-0.5rem'
                        >
                          Visit <IconLink svgProps={{className: "size-0.75rem"}} />
                        </a>
                      </TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        <Status status={item.status} />
                      </TableBoxedLayoutTD>
                      <TableBoxedLayoutTD>
                        {dayjs(item.created_at).format("MMMM D, YYYY h:mm A")}
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
        add={CreateBannerForm}
        edit={EditBannerForm}
        view={ViewBannerForm}
        delete={DeleteForm}
      />
    </ModalProvider>
  );
};

Component.displayName = "BannersPage";
