import {createContext, useRef, useState} from "react";

import AuthHelper from "../helpers/AuthHelper";

import {EnumUserRole} from "@/enums";

import useMutation from "@/hooks/useMutation";

import {apiLogout} from "../services";

type IBasePath = `/${IUserRole}`;

interface IAuthContext {
  isLoggedIn: boolean;
  userData: null | IUser;
  saveUser: (user: IUser) => void;
  basePath: IBasePath;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  userData: null,
  saveUser: () => {},
  basePath: `/${EnumUserRole.user}`,
  logout: () => {},
});

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({children}: IAuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(AuthHelper.userIsLoggedIn());

  const getUserDataInit = AuthHelper.getUserData();

  const [userData, setUserData] = useState<IUser | null>(getUserDataInit);

  const basePath = useRef<IBasePath>(`/${getUserDataInit?.role || EnumUserRole.user}`);

  const saveUser = (user: IUser) => {
    user.role = EnumUserRole.admin;
    AuthHelper.setUserData(user);
    AuthHelper.setUserIsLoggedIn(true);
    basePath.current = `/${user.role}`;
    setUserData(user);
    setIsLoggedIn(true);
  };

  const {mutate: mutateApiLogout} = useMutation({
    mutationFn: apiLogout,
  });

  const logout = () => {
    mutateApiLogout(undefined, {
      onSuccess: () => {
        AuthHelper.userLogout();
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{isLoggedIn, userData, saveUser, basePath: basePath.current, logout}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
