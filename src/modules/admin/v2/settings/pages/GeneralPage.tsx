import TransitionPage from "@/components/TransitionPage";

import useQuery from "@/hooks/useQuery";

import {apiGetGeneralSettings} from "../services";

import Title from "@/components/Title";

import GeneralSettingsForm from "../components/GeneralSettingsForm";

export const Component = () => {
  const {isLoading, data} = useQuery({
    queryKey: ["admin-get-general-settings"],
    queryFn: apiGetGeneralSettings,
  });

  return (
    <TransitionPage>
      <Title isLoading={isLoading}>General Settings</Title>
      {!isLoading && data?.data && <GeneralSettingsForm data={data.data} />}
    </TransitionPage>
  );
};

Component.displayName = "GeneralPage";
