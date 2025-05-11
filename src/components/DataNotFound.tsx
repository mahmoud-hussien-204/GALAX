import { TableBoxedLayoutTD, TableBoxedLayoutTR } from "./TableBoxedLayout"

function DataNotFound({ colSpan = 5 }: { colSpan: number }) {
  return (
    <TableBoxedLayoutTR>
      <TableBoxedLayoutTD colSpan={colSpan} className="text-center py-8 h-60">
        <div className="flex flex-col items-center justify-center gap-8">
          <svg
            className="w-20 h-w-20 text-gray-500 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 0v4m0-4h4m0 0l4 4"
            />
          </svg>
          <span>
            <h2 className="text-xl font-semibold text-neutral-300 mt-2">Sorry, No Data Found</h2>
            <p className="text-gray-500 mt-1 text-lg">No records to display.</p>
          </span>
        </div>
      </TableBoxedLayoutTD>
    </TableBoxedLayoutTR>
  )
}

export default DataNotFound