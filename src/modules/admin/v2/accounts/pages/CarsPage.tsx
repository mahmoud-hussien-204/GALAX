import TransitionPage from "@/components/TransitionPage";
import usePageTitle from "@/hooks/usePageTitle";
import ModalProvider from "@/providers/ModalProvider";

export const Component = () => {
  usePageTitle("Cars");

  return (
    <ModalProvider>
      <TransitionPage>
        <></>
      </TransitionPage>
    </ModalProvider>
  );
};

Component.displayName = "CarsPage";
