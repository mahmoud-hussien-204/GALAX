import {useLayoutEffect} from "react";

import useScreenTitle from "./useScreenTitle";

const usePageTitle = (title: string) => {
  const {setScreenTitle} = useScreenTitle();

  useLayoutEffect(() => {
    document.title = `SVS - ${title}`;
    setScreenTitle(title);
  }, [title, setScreenTitle]);
};

export default usePageTitle;
