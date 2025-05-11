import AppHelper from "@/helpers/appHelper";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({children, className}: IProps) => {
  return (
    <div className={AppHelper.classes("rounded-box bg-base-200 p-1rem", className)}>{children}</div>
  );
};

export default Card;
