import {useContext} from "react";

import {GeneralSettingsContext} from "../providers/GeneralSettingsProvider";

const useGeneralSettings = () => {
  return useContext(GeneralSettingsContext);
};

export default useGeneralSettings;
