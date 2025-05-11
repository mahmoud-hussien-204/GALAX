import AppHelper from "@/helpers/appHelper";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

const Button = ({children, className, isLoading, ...props}: IProps) => {
  return (
    <button
      disabled={isLoading}
      className={AppHelper.classes(
        "text-1rem btn btn-primary min-h-3rem font-semibold text-base-100",
        className
      )}
      {...props}
    >
      {children}
      {isLoading && <span className='loading loading-spinner loading-xs'></span>}
    </button>
  );
};

export default Button;
