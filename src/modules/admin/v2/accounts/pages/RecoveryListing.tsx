import TransitionPage from "@/components/TransitionPage";
import usePageTitle from "@/hooks/usePageTitle";
import useQuery from "@/hooks/useQuery";
import ModalProvider from "@/providers/ModalProvider";
import {getAllRecoveryListings} from "../services";
import RecoveryListingList from "../components/RecoveryListing/RecoveryListingList";
import Head from "../components/RecoveryListing/Head";
import Modal from "@/components/Modal";
import AddRecoveryForm from "../components/RecoveryListing/AddRecoveryForm";

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

        <Modal add={AddRecoveryForm} />
      </TransitionPage>
    </ModalProvider>
  );
};

Component.displayName = "CarsPage";
