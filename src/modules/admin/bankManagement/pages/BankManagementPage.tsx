import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import BanksList from "../components/BanksList";

import Modal from "@/components/Modal";

import EditBankForm from "../components/EditBankForm";

import DeleteBankForm from "../components/DeleteBankForm";

import Head from "../components/Head";

import CreateBankForm from "../components/CreateBankForm";

export const Component = () => {
  usePageTitle("Bank Management");
  return (
    <ModalProvider>
      <TransitionPage>
        <Head />
        <div className='mt-2rem'>
          <BanksList />
        </div>
      </TransitionPage>

      <Modal edit={EditBankForm} delete={DeleteBankForm} add={CreateBankForm} />
    </ModalProvider>
  );
};

Component.displayName = "BankManagementPage";
