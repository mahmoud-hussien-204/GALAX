const IconContent = ({ pathProps, svgProps }: ISvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
      {...svgProps}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8 21h6c5 0 7-2 7-7V8c0-5-2-7-7-7H8C3 1 1 3 1 8v6c0 5 2 7 7 7z"
        className="stroke-current"
        {...pathProps}
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M8.1 11V9.52c0-1.91 1.35-2.68 3-1.73l1.28.74 1.28.74c1.65.95 1.65 2.51 0 3.46l-1.28.74-1.28.74c-1.65.95-3 .17-3-1.73V11z"
        className="stroke-current"
        {...pathProps}
      ></path>
    </svg>
  );
};

export default IconContent;
