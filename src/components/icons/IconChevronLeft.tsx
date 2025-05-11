const IconChevronLeft = ({ pathProps, svgProps }: ISvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...svgProps}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M10 13.28L5.653 8.933a1.324 1.324 0 010-1.866L10 2.72"
        className="stroke-current"
        {...pathProps}
      ></path>
    </svg>
  );
};

export default IconChevronLeft;
