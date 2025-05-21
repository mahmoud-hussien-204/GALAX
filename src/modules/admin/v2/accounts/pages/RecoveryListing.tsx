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

export const Component = () => {
  usePageTitle("Recovery Listing");

  const {data, isLoading} = useQuery({
    queryFn: getAllRecoveryListings,
    queryKey: ["admin-get-recovery-listings"],
  });

  return (
    <ModalProvider>
      <TransitionPage>
        <Head />
        <RecoveryListingList data={data?.data || []} isLoading={isLoading} totalPages={1} />

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
