import Card from "@/components/Card";

import Title from "@/components/Title";

import TransitionPage from "@/components/TransitionPage";

import GeneralSettingsEmailForm from "../../components/general/GeneralSettingsEmailForm";

export const Component = () => {
  return (
    <TransitionPage>
      <Card>
        <Title>Email Setup</Title>
        <GeneralSettingsEmailForm />
      </Card>
    </TransitionPage>
  );
};

Component.displayName = "GeneralEmailPage";
