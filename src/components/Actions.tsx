import Dots from "./Dots";

interface IProps {
  data: object;
}

const Actions = ({data}: IProps) => {
  console.log(data);
  return (
    <div className='dropdown dropdown-end'>
      <div tabIndex={0} role='button'>
        <Dots />
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
  );
};

export default Actions;
