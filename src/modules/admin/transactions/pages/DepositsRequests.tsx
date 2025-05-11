import Modal from "@/components/Modal";

import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import DepositsRequestsList from "../components/DepositsRequestsList";

import AcceptForm from "../components/AcceptForm";

import RejectForm from "../components/RejectForm";

import Search from "@/components/Search";
export const Component = () => {
  usePageTitle("Deposits Requests");
  return (
    <ModalProvider>
      <TransitionPage>
        <div className='w-full max-w-full sm:w-[450px]'>
          <Search placeholder='Search in Deposit Requests' />
        </div>
        <div className='mt-2rem'>
          <DepositsRequestsList />
        </div>
      </TransitionPage>

      <Modal accept={AcceptForm} reject={RejectForm} />
    </ModalProvider>
  );
};

Component.displayName = "DepositsRequests";
