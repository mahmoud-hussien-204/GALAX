import Card from "@/components/Card";

import Title from "@/components/Title";

import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ConfigurationItemForm from "../components/ConfigurationItemForm";
import {constantSettingsConfigurations} from "../constants";

export const Component = () => {
  usePageTitle("Configurations");

  return (
    <TransitionPage>
      <Card>
        <Title>Configurations</Title>
        <div className='grid grid-cols-1 gap-1.25rem'>
          {constantSettingsConfigurations.map((item) => (
            <ConfigurationItemForm key={item.id} data={item} />
          ))}
        </div>
      </Card>
    </TransitionPage>
  );
};

Component.displayName = "ConfigurationsPage";
