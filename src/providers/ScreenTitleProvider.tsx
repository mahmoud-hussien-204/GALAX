import {createContext, useState} from "react";

interface IScreenTitleContext {
  screenTitle: string;
  setScreenTitle: React.Dispatch<React.SetStateAction<string>>;
}

export const ScreenTitleContext = createContext<IScreenTitleContext>({
  screenTitle: "",
  setScreenTitle: () => {},
});

const ScreenTitleProvider = ({children}: {children: React.ReactNode}) => {
  const [screenTitle, setScreenTitle] = useState<string>("");
  return (
    <ScreenTitleContext.Provider
      value={{
        screenTitle,
        setScreenTitle,
      }}
    >
      {children}
    </ScreenTitleContext.Provider>
  );
};

export default ScreenTitleProvider;
