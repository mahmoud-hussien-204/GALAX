import useScreenTitle from "@/hooks/useScreenTitle";

import NotificationsMenu from "./NotificationsMenu";

import ProfileMenu from "./ProfileMenu";

import IconMenu from "./icons/IconMenu";

const Header = () => {
  const {screenTitle} = useScreenTitle();

  return (
    <header className='fixed end-0 start-0 top-0 z-40 flex h-header-height-with-padding items-center justify-between px-container-padding pt-1.5rem backdrop-blur-md duration-150 peer-checked:translate-x-header-start lg:start-header-start lg:peer-checked:start-0 lg:peer-checked:translate-x-0'>
      <div className='flex items-center gap-0.5rem sm:gap-0.75rem'>
        <label
          htmlFor='toggle-sidebar'
          className='flex h-2rem w-2rem cursor-pointer items-center justify-center rounded-full bg-base-300 text-neutral-content opacity-70 hover:opacity-100'
        >
          <IconMenu svgProps={{className: "w-1.25rem"}} />
        </label>
        <h2 className='text-neutral sm:text-22'>{screenTitle}</h2>
      </div>

      <div className='flex items-center gap-0.5rem sm:gap-1.5rem'>
        <NotificationsMenu />
        <ProfileMenu />
      </div>
    </header>
  );
};

export default Header;
