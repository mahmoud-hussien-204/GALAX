import AppHelper from "@/helpers/appHelper";

interface IProps {
  className?: string;
  title: string;
  value: number;
}

const StatsBox = ({className, title, value}: IProps) => {
  return (
    <div className={AppHelper.classes("rounded-md bg-gradient-to-r p-1.25rem", className)}>
      <div className='text-md font-semibold'>{title}</div>
      <div className='mt-1.5rem flex items-center'>
        <div className='text-32 font-bold'> {value} </div>
      </div>
    </div>
  );
};

export default StatsBox;
