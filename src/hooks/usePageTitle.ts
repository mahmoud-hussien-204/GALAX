import {useLayoutEffect} from "react";

import useScreenTitle from "./useScreenTitle";

import {AppName} from "@/constants";

const usePageTitle = (title: string) => {
  const {setScreenTitle} = useScreenTitle();

  useLayoutEffect(() => {
    document.title = `${AppName} - ${title}`;
    setScreenTitle(title);
  }, [title, setScreenTitle]);
};

export default usePageTitle;
