import Dots from "./Dots";

interface IProps {
  title: React.ReactNode;
}

const ListTitle = ({title}: IProps) => {
  return (
    <div className='flex items-center justify-between border-b border-b-neutral-border pb-1rem'>
      <h6 className='text-1rem font-semibold text-neutral-1100'>{title}</h6>
      <div className='dropdown dropdown-end'>
        <div tabIndex={0} role='button'>
          <Dots className='flex-col' />
        </div>
        <ul
          tabIndex={0}
          className='menu dropdown-content z-[1] mt-1.5rem w-52 rounded-box bg-base-100 p-2 shadow'
        >
          <li>
            <a>Item 1</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListTitle;
