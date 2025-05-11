import Card from "@/components/Card";

import Modal from "@/components/Modal";

import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import DeleteFAQForm from "../components/DeleteFAQForm";

import EditFAQForm from "../components/EditFAQForm";

import FAQHead from "../components/FAQHead";

import AddFAQForm from "../components/AddFAQForm";

import FAQList from "../components/FAQList";

export const Component = () => {
  usePageTitle("FAQ");

  return (
    <ModalProvider>
      <TransitionPage>
        <Card>
          <FAQHead />
          <div className='mt-2rem'>
            <FAQList />
          </div>
        </Card>
      </TransitionPage>

      <Modal delete={DeleteFAQForm} edit={EditFAQForm} add={AddFAQForm} />
    </ModalProvider>
  );
};

Component.displayName = "FAQPage";
