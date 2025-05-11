const IconMenu = ({pathProps, svgProps}: ISvgIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      {...svgProps}
    >
      <path
        className='fill-current'
        fillRule='evenodd'
        d='M20.75 7a.75.75 0 01-.75.75H4a.75.75 0 010-1.5h16a.75.75 0 01.75.75zM20.75 12a.75.75 0 01-.75.75H4a.75.75 0 010-1.5h16a.75.75 0 01.75.75zM20.75 17a.75.75 0 01-.75.75H4a.75.75 0 010-1.5h16a.75.75 0 01.75.75z'
        clipRule='evenodd'
        {...pathProps}
      ></path>
    </svg>
  );
};

export default IconMenu;
