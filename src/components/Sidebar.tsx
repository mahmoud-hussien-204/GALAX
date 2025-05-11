import Logo from "./Logo";

import Nav from "./Nav";

const Sidebar = () => {
  return (
    <aside className='fixed bottom-container-padding start-container-padding top-container-padding z-40 w-0 overflow-y-auto rounded-1rem bg-base-300 transition-all peer-checked:w-sidebar-width lg:w-sidebar-width lg:peer-checked:w-0'>
      {/* start logo  */}
      <div className='mb-1.5rem flex h-header-height items-center px-container-padding'>
        <Logo />
      </div>
      {/* ********* end  */}

      <Nav />
    </aside>
  );
};

export default Sidebar;
