import useAuth from "@/modules/auth/hooks/useAuth";

import Dropdown, {DropdownMenu} from "./Dropdown";

import {Link} from "react-router-dom";

import IconUser from "./icons/IconUser";

import IconEdit from "./icons/IconEdit";

import IconLogout from "./icons/IconLogout";

const ProfileMenu = () => {
  const {userData, basePath, logout} = useAuth();

  return (
    <Dropdown
      button={
        <div className='flex items-center gap-0.5rem rounded-full bg-base-300 p-0.5rem sm:pe-1rem'>
          <img
            src={userData?.avatar}
            alt='avatar'
            className='h-2rem w-2rem flex-1 rounded-full object-cover'
          />
          <h6 className='hidden max-w-32 text-14 sm:line-clamp-1'>{userData?.name}</h6>
        </div>
      }
    >
      <DropdownMenu className='flex flex-col gap-0.5rem'>
        <Link to={`${basePath}/profile`} className='flex items-center gap-0.5rem py-0.5rem text-14'>
          <IconUser />
          Profile
        </Link>
        <Link to={`${basePath}/profile`} className='flex items-center gap-0.5rem py-0.5rem text-14'>
          <IconEdit />
          Settings
        </Link>
        <button
          type='button'
          className='flex items-center gap-0.5rem py-0.5rem text-14'
          onClick={logout}
        >
          <IconLogout />
          Logout
        </button>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileMenu;
