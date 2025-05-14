import {createContext} from "react";

import {IGeneralSettings} from "../interfaces";

import useQuery from "@/hooks/useQuery";

import {apiGetGeneralSettings} from "../services";

import LoadingScreen from "@/components/LoadingScreen";

export const GeneralSettingsContext = createContext<{
  settings: IGeneralSettings;
  isLoading: boolean;
}>({
  settings: undefined,
  isLoading: true,
});

const GeneralSettingsProvider = ({children}: React.PropsWithChildren) => {
  const {data, isLoading} = useQuery({
    queryKey: ["get-admin-general-settings"],
    queryFn: apiGetGeneralSettings,
  });

  return (
    <GeneralSettingsContext.Provider value={{settings: data?.settings, isLoading}}>
      {isLoading ? <LoadingScreen /> : children}
    </GeneralSettingsContext.Provider>
  );
};

export default GeneralSettingsProvider;
