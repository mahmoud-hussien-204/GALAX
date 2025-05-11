import {ScreenTitleContext} from "@/providers/ScreenTitleProvider";

import {useContext} from "react";

const useScreenTitle = () => {
  return useContext(ScreenTitleContext);
};

export default useScreenTitle;
