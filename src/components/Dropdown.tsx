import AppHelper from "@/helpers/appHelper";

interface IProps {
  className?: string;
  children: React.ReactNode;
}

const Dropdown = ({className, children, button}: IProps & {button: React.ReactNode}) => {
  return (
    <div className={AppHelper.classes("dropdown dropdown-end", className)}>
      <div tabIndex={0} role='button'>
        {button}
      </div>
      {children}
    </div>
  );
};

export default Dropdown;

export const DropdownMenu = ({children, className}: IProps) => {
  return (
    <div
      tabIndex={0}
      className={AppHelper.classes(
        "dropdown-content absolute !right-[6.5%] z-20 mt-1rem min-w-[15rem] rounded-box bg-base-300 px-1rem py-0.75rem",
        className
      )}
    >
      {children}
    </div>
  );
};
