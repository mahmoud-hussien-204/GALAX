import AppHelper from "@/helpers/appHelper";

import {forwardRef} from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const RadioBoxInput = forwardRef(
  ({className, label, ...props}: IProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <label className='flex items-center gap-0.5rem'>
        <input
          ref={ref}
          {...props}
          type='radio'
          className={AppHelper.classes("radio radio-sm checked:radio-primary", className)}
        />
        <span>{label}</span>
      </label>
    );
  }
);

export default RadioBoxInput;
