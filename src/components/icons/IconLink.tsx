const IconLink = ({ pathProps, svgProps }: ISvgIconProps) => {
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
        className="stroke-current"
        {...pathProps}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.667 7.333l5.466-5.466M14.667 4.533v-3.2h-3.2M7.333 1.333H6C2.667 1.333 1.333 2.667 1.333 6v4c0 3.333 1.334 4.667 4.667 4.667h4c3.333 0 4.667-1.334 4.667-4.667V8.667"
      ></path>
    </svg>
  );
};

export default IconLink;
