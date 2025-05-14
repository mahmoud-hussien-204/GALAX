import Card from "@/components/Card";

import Title from "@/components/Title";

import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import PaymentMethodsSettingsForm from "../components/PaymentMethodsSettingsForm";

export const Component = () => {
  usePageTitle("Payment Methods");

  return (
    <TransitionPage>
      <Card>
        <Title>Payment Methods</Title>
        <PaymentMethodsSettingsForm />
      </Card>
    </TransitionPage>
  );
};

Component.displayName = "FeaturePage";
