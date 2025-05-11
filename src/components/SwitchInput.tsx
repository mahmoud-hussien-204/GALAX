import AppHelper from "@/helpers/appHelper";

import {forwardRef} from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const SwitchInput = forwardRef(
  ({isError, className, ...props}: IProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    console.log(isError);
    return (
      <input
        ref={ref}
        {...props}
        type='checkbox'
        className={AppHelper.classes("toggle toggle-primary rounded-full", className)}
      />
    );
  }
);

export default SwitchInput;
