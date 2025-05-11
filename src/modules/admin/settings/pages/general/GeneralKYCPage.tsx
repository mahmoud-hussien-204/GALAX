import Card from "@/components/Card";

import Title from "@/components/Title";

import TransitionPage from "@/components/TransitionPage";

import GeneralKycSettingsForm from "../../components/general/GeneralKycSettingsForm";

export const Component = () => {
  return (
    <TransitionPage>
      <Card>
        <Title>KYC Setup - Withdrawal Section</Title>
        <GeneralKycSettingsForm />
      </Card>
    </TransitionPage>
  );
};

Component.displayName = "GeneralKYCPage";
