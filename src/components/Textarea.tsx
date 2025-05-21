import AppHelper from "@/helpers/appHelper";

import {forwardRef} from "react";

interface IProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isError?: boolean;
}

const Textarea = forwardRef(
  ({isError, className, ...props}: IProps, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
    return (
      <textarea
        ref={ref}
        {...props}
        className={AppHelper.classes(
          "textarea textarea-bordered h-8rem w-full resize-none rounded-0.5rem border-base-200 bg-base-300 text-neutral placeholder:text-14 placeholder:text-neutral-500 focus:border-primary focus:outline-0",
          {
            "!border-error": isError,
          },
          className
        )}
      />
    );
  }
);

export default Textarea;
