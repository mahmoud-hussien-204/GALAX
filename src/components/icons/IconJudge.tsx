const IconJudge = ({ pathProps, svgProps }: ISvgIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      fill="none"
      viewBox="0 0 23 23"
      {...svgProps}
    >
      <path
        {...pathProps}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.46 13.73a2.81 2.81 0 100-5.62 2.81 2.81 0 000 5.62zM15.65 20.2c0-2.33-2.32-4.23-5.19-4.23-2.87 0-5.19 1.89-5.19 4.23"
        className="stroke-current"
      ></path>
      <path
        {...pathProps}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20 12.5c0 5.25-4.25 9.5-9.5 9.5S1 17.75 1 12.5 5.25 3 10.5 3c1.31 0 2.56.26 3.7.74-.13.4-.2.82-.2 1.26 0 .75.21 1.46.58 2.06.2.34.46.65.76.91C16.04 8.61 16.97 9 18 9c.44 0 .86-.07 1.25-.21.48 1.14.75 2.4.75 3.71z"
        className="stroke-current"
      ></path>
      <path
        {...pathProps}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M22 5c0 .32-.04.63-.12.93-.09.4-.25.79-.46 1.13-.48.81-1.25 1.44-2.17 1.73-.39.14-.81.21-1.25.21a3.92 3.92 0 01-2.66-1.03c-.3-.26-.56-.57-.76-.91A3.92 3.92 0 0114 5c0-.44.07-.86.2-1.26A3.995 3.995 0 0118 1c1.18 0 2.25.51 2.97 1.33C21.61 3.04 22 3.98 22 5zM19.49 4.98h-2.98M18 3.52v2.99"
        className="stroke-current"
      ></path>
    </svg>
  );
};

export default IconJudge;
