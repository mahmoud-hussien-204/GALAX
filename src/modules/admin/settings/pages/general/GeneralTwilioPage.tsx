import Card from "@/components/Card";

import Title from "@/components/Title";

import TransitionPage from "@/components/TransitionPage";

import GeneralSettingsTwilioForm from "../../components/general/GeneralSettingsTwilioForm";

export const Component = () => {
  return (
    <TransitionPage>
      <Card>
        <Title>Twilio Setup</Title>
        <GeneralSettingsTwilioForm />
      </Card>
    </TransitionPage>
  );
};

Component.displayName = "GeneralTwilioPage";
