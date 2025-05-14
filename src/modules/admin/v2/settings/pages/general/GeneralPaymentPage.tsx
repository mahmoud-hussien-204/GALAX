import Card from "@/components/Card";

import Title from "@/components/Title";

import TransitionPage from "@/components/TransitionPage";

import GeneralSettingsPaymentForm from "../../components/general/GeneralSettingsPaymentForm";

export const Component = () => {
  return (
    <TransitionPage>
      <Card>
        <Title>Coin Payment Details</Title>
        <GeneralSettingsPaymentForm />
      </Card>
    </TransitionPage>
  );
};

Component.displayName = "GeneralPaymentPage";
