import { createContext, useState } from "react";

import AuthJourneyHelper from "../helpers/AuthJourneyHelper";

interface IAuthJourneyContext {
  userEmail: null | string;
  saveUserEmail: (email: string) => void;
}

export const AuthJourneyContext = createContext<IAuthJourneyContext>({
  userEmail: null,
  saveUserEmail: () => {},
});

interface IAuthJourneyProviderProps {
  children: React.ReactNode;
}

const AuthJourneyProvider = ({ children }: IAuthJourneyProviderProps) => {
  const [userEmail, setUserEmail] = useState<string | null>(
    AuthJourneyHelper.getUserEmail()
  );

  const saveUserEmail = (email: string) => {
    AuthJourneyHelper.setUserEmail(email);
    setUserEmail(email);
  };

  return (
    <AuthJourneyContext.Provider value={{ userEmail, saveUserEmail }}>
      {children}
    </AuthJourneyContext.Provider>
  );
};

export default AuthJourneyProvider;
