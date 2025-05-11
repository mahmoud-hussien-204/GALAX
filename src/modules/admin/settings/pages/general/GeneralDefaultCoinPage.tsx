import Card from "@/components/Card";

import Title from "@/components/Title";

import TransitionPage from "@/components/TransitionPage";

import GeneralSettingsDefaultCoinForm from "../../components/general/GeneralSettingsDefaultCoinForm";

export const Component = () => {
  return (
    <TransitionPage>
      <Card>
        <Title>Default Coin Send Settings</Title>
        <GeneralSettingsDefaultCoinForm />
      </Card>
    </TransitionPage>
  );
};

Component.displayName = "GeneralDefaultCoinPage";
