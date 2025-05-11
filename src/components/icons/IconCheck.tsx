const IconCheck = ({svgProps}: ISvgIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
      {...svgProps}
    >
      <circle cx='12' cy='12' r='10' className='stroke-current' strokeWidth='1.5'></circle>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M8.5 12.5l2 2 5-5'
        className='stroke-current'
      ></path>
    </svg>
  );
};

export default IconCheck;
