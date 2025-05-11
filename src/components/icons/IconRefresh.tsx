const IconRefresh = ({svgProps}: ISvgIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='19'
      fill='none'
      viewBox='0 0 18 19'
      className='w-1rem'
      {...svgProps}
    >
      <path
        strokeLinecap='square'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M15.364 5.05l-.707-.707a8 8 0 102.28 4.658m-1.573-3.95h-4.243m4.243 0V.807'
        className='stroke-current'
      ></path>
    </svg>
  );
};

export default IconRefresh;
