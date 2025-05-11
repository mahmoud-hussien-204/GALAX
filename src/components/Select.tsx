import AppHelper from "@/helpers/appHelper";

import {forwardRef} from "react";

export type TOptionItem = React.DetailedHTMLProps<
  React.OptionHTMLAttributes<HTMLOptionElement>,
  HTMLOptionElement
> & {
  value: string | number;
  label: string | number;
};

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  isError?: boolean;
  options: TOptionItem[];
}

const Select = forwardRef(
  ({isError, className, options, ...props}: IProps, ref: React.ForwardedRef<HTMLSelectElement>) => {
    return (
      <select
        ref={ref}
        {...props}
        className={AppHelper.classes(
          "select select-bordered min-h-0 w-full border-base-200 bg-base-300 text-neutral focus:border-primary focus:outline-0",
          {
            "!border-error": isError,
          },
          className
        )}
      >
        {options.map((option) => (
          <option key={option.value} className='text-neutral disabled:text-neutral-500' {...option}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

export default Select;
