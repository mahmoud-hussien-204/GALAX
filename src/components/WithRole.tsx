import {EnumUsersRoutes} from "@/enums";

import useAuth from "@/modules/auth/hooks/useAuth";

import {Navigate, useLocation} from "react-router-dom";

interface IProps {
  children: React.ReactNode;
}

const WithRole = ({children}: IProps) => {
  const {pathname} = useLocation();

  const {userData} = useAuth();

  const userRole = userData?.role ? EnumUsersRoutes[userData.role] : null;

  if (!userRole) {
    return <Navigate to='/access-denied' />;
  }

  if (pathname === "/") {
    return <Navigate to={userRole} />;
  }

  if (!pathname.startsWith(userRole)) {
    return <Navigate to='/access-denied' />;
  }

  return children;
};

export default WithRole;
