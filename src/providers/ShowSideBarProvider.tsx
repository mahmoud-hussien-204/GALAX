import { createContext, PropsWithChildren, useState } from "react";

interface IContextProps {
  showSidebar: boolean;
  toogleShowSideBar: () => void;
}

export const ShowSideBarContext = createContext<IContextProps>({
  showSidebar: true,
  toogleShowSideBar: () => { },
});

export default function ShowSideBarProvider({ children }: PropsWithChildren) {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <ShowSideBarContext.Provider value={{
      showSidebar,
      toogleShowSideBar: () => setShowSidebar((prev) => !prev),
    }}>
      {children}
    </ShowSideBarContext.Provider>
  );
}