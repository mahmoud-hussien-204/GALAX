import {constantStatusColors} from "@/constants";

import AppHelper from "@/helpers/appHelper";

interface IProps {
  status: string;
  bordered?: boolean;
}

const Status = ({status, bordered = true}: IProps) => {
  return (
    <span
      className={AppHelper.classes(
        "inline-flex h-2rem items-center justify-center gap-0.75rem rounded-full text-12 font-medium capitalize",
        constantStatusColors[status.toLowerCase() as keyof typeof constantStatusColors],
        {
          "min-w-[7.5rem] border px-1.2rem": bordered,
        }
      )}
    >
      {status}
    </span>
  );
};

export default Status;
