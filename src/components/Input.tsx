import AppHelper from "@/helpers/appHelper";

import {forwardRef} from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const Input = forwardRef(
  ({isError, className, ...props}: IProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        ref={ref}
        {...props}
        className={AppHelper.classes(
          "input input-bordered h-3rem w-full rounded-0.5rem border-base-200 bg-base-300 text-neutral placeholder:text-14 placeholder:text-neutral-500 focus:border-primary focus:outline-0",
          {
            "!border-error": isError,
          },
          className
        )}
      />
    );
  }
);

export default Input;
