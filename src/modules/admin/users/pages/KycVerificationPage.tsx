import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import Modal from "@/components/Modal";

import Search from "@/components/Search";

import KycVerificationList from "../components/KycVerificationList";

import ViewKycForm from "../components/ViewKycForm";

export const Component = () => {
  usePageTitle("Kyc Verification");

  return (
    <ModalProvider>
      <TransitionPage>
        <div className='w-[450px] max-w-full'>
          <Search placeholder='Search in Kyc Verifications' />
        </div>
        <div className='mt-2rem'>
          <KycVerificationList />
        </div>
      </TransitionPage>

      <Modal view={ViewKycForm} />
    </ModalProvider>
  );
};

Component.displayName = "KycVerificationPage";
