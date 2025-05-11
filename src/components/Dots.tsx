import AppHelper from "@/helpers/appHelper";

interface IProps {
  className?: string;
}

const Dots = ({className}: IProps) => {
  return (
    <div
      className={AppHelper.classes(
        "flex h-6 w-8 cursor-pointer items-center justify-center gap-0.125rem",
        className
      )}
    >
      {Array.from({length: 3}).map((_, i) => (
        <span key={i} className='block h-[0.1875rem] w-[0.1875rem] rounded-full bg-neutral'></span>
      ))}
    </div>
  );
};

export default Dots;
