import {constantRequestStatus} from "../constants";

import Search from "@/components/Search";

import PageFilterSelect from "@/components/PageFilterSelect";

const Head = () => {
  return (
    <div className='flex flex-wrap items-center gap-1.5rem'>
      <div className='w-full max-w-full sm:w-[450px]'>
        <Search placeholder='Search in withdrawals' />
      </div>
      <PageFilterSelect options={constantRequestStatus} />
    </div>
  );
};

export default Head;
