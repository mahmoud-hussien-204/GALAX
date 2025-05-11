import {Navigate, useLocation} from "react-router-dom";

import useAuth from "@/modules/auth/hooks/useAuth";

interface IProps {
  children: React.ReactNode;
}

const ProtectedRouter = ({children}: IProps) => {
  const {isLoggedIn} = useAuth();

  const {pathname} = useLocation();

  const inAuthPages = pathname.startsWith("/auth");

  if (!isLoggedIn && !inAuthPages) return <Navigate to='/auth' />;

  if (isLoggedIn && inAuthPages) return <Navigate to='/' />;

  return children;
};

export default ProtectedRouter;
