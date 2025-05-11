import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import GiveCoinHistoryList from "../components/GiveCoinHistoryList";

import GiveCoinHistoryHead from "../components/GiveCoinHistoryHead";

import Modal from "@/components/Modal";

import ModalProvider from "@/providers/ModalProvider";

import GiveCoinForm from "../components/GiveCoinForm";

export const Component = () => {
  usePageTitle("Give Coin History");

  return (
    <ModalProvider>
      <TransitionPage>
        <GiveCoinHistoryHead />
        <div className='mt-2rem'>
          <GiveCoinHistoryList />
        </div>
      </TransitionPage>

      <Modal add={GiveCoinForm} />
    </ModalProvider>
  );
};

Component.displayName = "GiveCoinHistoryPage";
