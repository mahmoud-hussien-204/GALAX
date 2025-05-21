import TransitionPage from "@/components/TransitionPage";
import usePageTitle from "@/hooks/usePageTitle";
import ModalProvider from "@/providers/ModalProvider";

export const Component = () => {
  usePageTitle("All Business Listing");

  return (
    <ModalProvider>
      <TransitionPage>
        <></>
      </TransitionPage>
    </ModalProvider>
  );
};

Component.displayName = "CarsPage";
