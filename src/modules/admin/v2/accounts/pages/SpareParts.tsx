import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

export const Component = () => {
  usePageTitle("Spare Parts");

  return (
    <ModalProvider>
      <TransitionPage>
        <></>
      </TransitionPage>
    </ModalProvider>
  );
};

Component.displayName = "CarsPage";
