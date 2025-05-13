import {TableBoxedLayoutTD, TableBoxedLayoutTR} from "./TableBoxedLayout";

function DataNotFound({colSpan = 5}: {colSpan: number}) {
  return (
    <TableBoxedLayoutTR>
      <TableBoxedLayoutTD colSpan={colSpan} className='h-60 py-8 text-center'>
        <div className='flex flex-col items-center justify-center gap-8'>
          <svg
            className='h-w-20 mx-auto w-20 text-gray-500'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm0 0v4m0-4h4m0 0l4 4'
            />
          </svg>
          <span>
            <h2 className='mt-2 text-xl font-semibold text-neutral'>Sorry, No Data Found</h2>
            <p className='mt-1 text-lg text-gray-500'>No records to display.</p>
          </span>
        </div>
      </TableBoxedLayoutTD>
    </TableBoxedLayoutTR>
  );
}

export default DataNotFound;
