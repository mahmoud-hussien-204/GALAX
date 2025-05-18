import TransitionPage from "@/components/TransitionPage";
import usePageTitle from "@/hooks/usePageTitle";
import useQuery from "@/hooks/useQuery";
import ModalProvider from "@/providers/ModalProvider";
import {getAllRecoveryListings} from "../services/recoveryService";
import RecoveryListingList from "../components/RecoveryListing/RecoveryListingList";
import Head from "../components/RecoveryListing/Head";
import Modal from "@/components/Modal";
import AddRecoveryForm from "../components/RecoveryListing/AddRecoveryForm";
import ViewRecoveryDetails from "../components/RecoveryListing/ViewRecoveryDetails";
import {EnumGarageStatus} from "../enums";

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
        <RecoveryListingList
          data={
            data?.data
              ? [
                  {
                    service_address: "test address",
                    service_city: "test city",
                    service_description: "test description",
                    service_email: "test@email.com",
                    service_logo: null,
                    service_mobile: "01121945676",
                    service_name: "test name",
                    service_phone: "01121945676",
                    service_whatsapp: "01121945676",
                    expires_at: "2022-01-01T00:00:00.000Z",
                    status: EnumGarageStatus.SHOW,
                  },
                  {
                    service_address: "test address",
                    service_city: "test city",
                    service_description: "test description",
                    service_email: "test@email.com",
                    service_logo: null,
                    service_mobile: "01121945676",
                    service_name: "test name",
                    service_phone: "01121945676",
                    service_whatsapp: "01121945676",
                    expires_at: "2022-01-01T00:00:00.000Z",
                    status: EnumGarageStatus.SHOW,
                  },
                ]
              : []
          }
          isLoading={isLoading}
          totalPages={1}
        />

        <Modal add={AddRecoveryForm} view={ViewRecoveryDetails} />
      </TransitionPage>
    </ModalProvider>
  );
};

Component.displayName = "RecoveryListingPage";
