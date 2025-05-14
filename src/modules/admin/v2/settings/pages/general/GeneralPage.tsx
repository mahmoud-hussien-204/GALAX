import Card from "@/components/Card";

import Title from "@/components/Title";

import TransitionPage from "@/components/TransitionPage";

import GeneralSettingsForm from "../../components/general/GeneralSettingsForm";

import GeneralSettingsOtherForm from "../../components/general/GeneralSettingsOtherForm";

export const Component = () => {
  return (
    <TransitionPage>
      <div className='mb-2rem'>
        <Card>
          <Title>General Settings</Title>
          <GeneralSettingsForm />
        </Card>
      </div>

      <Card>
        <Title>Some other settings</Title>
        <GeneralSettingsOtherForm />
      </Card>
    </TransitionPage>
  );
};

Component.displayName = "GeneralPage";
