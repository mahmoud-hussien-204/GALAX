import Modal from "@/components/Modal";

import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import Head from "../components/Head";

import WithdrawalsRequestsList from "../components/WithdrawalsRequestsList";

import AcceptForm from "../components/AcceptForm";

import RejectForm from "../components/RejectForm";

export const Component = () => {
  usePageTitle("Withdrawals Requests");
  return (
    <ModalProvider>
      <TransitionPage>
        <Head />
        <div className='mt-2rem'>
          <WithdrawalsRequestsList />
        </div>
      </TransitionPage>

      <Modal accept={AcceptForm} reject={RejectForm} />
    </ModalProvider>
  );
};

Component.displayName = "WithdrawalsRequests";
