import {ShowSideBarContext} from "@/providers/ShowSideBarProvider";

import {useContext} from "react";

export default function useShowSideBar() {
  return useContext(ShowSideBarContext);
}
