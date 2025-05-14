import Card from "@/components/Card";

import Title from "@/components/Title";

import TransitionPage from "@/components/TransitionPage";

import GeneralReferralSettingsForm from "../../components/general/GeneralReferralSettingsForm";

export const Component = () => {
  return (
    <TransitionPage>
      <Card>
        <Title>Referral Settings</Title>
        <GeneralReferralSettingsForm />
      </Card>
    </TransitionPage>
  );
};

Component.displayName = "GeneralReferralPage";
