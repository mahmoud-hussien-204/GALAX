import useQuery from "@/hooks/useQuery";

import Dropdown, {DropdownMenu} from "./Dropdown";

import IconBell from "./icons/IconBell";

import {apiGetUserNotifications} from "@/services";

import useAuth from "@/modules/auth/hooks/useAuth";

import {EnumUserRole} from "@/enums";

import WithLoading from "./WithLoading";

const NotificationsMenu = () => {
  const {userData} = useAuth();

  const isUser = userData?.role === EnumUserRole.user;

  const {data, isLoading} = useQuery({
    queryKey: ["user-get-notifications"],
    queryFn: apiGetUserNotifications,
    enabled: isUser,
  });

  console.log("data", data);

  return (
    <Dropdown
      button={
        <div className='indicator mt-[10px]'>
          <span className='badge indicator-item badge-primary badge-xs rounded-full'></span>
          <IconBell />
        </div>
      }
    >
      <DropdownMenu>
        <WithLoading isLoading={isLoading}>notifications</WithLoading>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NotificationsMenu;
