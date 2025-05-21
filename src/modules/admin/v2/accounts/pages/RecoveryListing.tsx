import TransitionPage from "@/components/TransitionPage";
import usePageTitle from "@/hooks/usePageTitle";
import useQuery from "@/hooks/useQuery";
import ModalProvider from "@/providers/ModalProvider";
import {getAllRecoveryListings} from "../services/recoveryService";
import RecoveryListingList from "../components/recovery/RecoveryListingList";
import Head from "../components/recovery/Head";
import Modal from "@/components/Modal";
import AddRecoveryForm from "../components/recovery/AddRecoveryForm";
import ViewRecoveryDetails from "../components/recovery/ViewRecoveryDetails";
import EditRecoveryForm from "../components/recovery/EditRecoveryForm";
import DeleteRecoveryForm from "../components/recovery/DeleteRecoveryForm";
import useApiUrlFilter from "@/hooks/useApiUrlFilter";

export const Component = () => {
  usePageTitle("Recovery Listing");

  const {
    pageSearchParams: page,
    searchSearchParams: search,
    limitSearchParams: limit,
  } = useApiUrlFilter();

  const {data, isLoading} = useQuery({
    queryFn: () => getAllRecoveryListings({page, search, limit}),
    queryKey: ["admin-get-recovery-listings", page, search, limit],
  });

  const totalPages = 1;

  return (
    <ModalProvider>
      <TransitionPage>
        <Head />
        <RecoveryListingList
          data={data?.data || []}
          isLoading={isLoading}
          totalPages={totalPages}
        />

        <Modal
          add={AddRecoveryForm}
          view={ViewRecoveryDetails}
          edit={EditRecoveryForm}
          delete={DeleteRecoveryForm}
        />
      </TransitionPage>
    </ModalProvider>
  );
};

Component.displayName = "RecoveryListingPage";
