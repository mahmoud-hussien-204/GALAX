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
        "inline-flex h-1.75rem items-center justify-center gap-0.75rem rounded-full text-12 font-medium capitalize",
        constantStatusColors[status.toLowerCase() as keyof typeof constantStatusColors],
        {
          "border px-1rem": bordered,
        }
      )}
    >
      {status}
    </span>
  );
};

export default Status;
