import useApiUrlFilter from "@/hooks/useApiUrlFilter";

import Select from "./Select";

import {useCallback} from "react";

import Label from "./Label";

const PageLimit = () => {
  const {limitSearchParams, setSearchParams, searchParams} = useApiUrlFilter();

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("limit", e.target.value);
      setSearchParams(newSearchParams);
    },
    [searchParams, setSearchParams]
  );

  return (
    <div className='flex items-center gap-0.5rem'>
      <Select
        options={[
          {value: 10, label: "10"},
          {value: 20, label: "20"},
          {value: 30, label: "30"},
          {value: 40, label: "40"},
          {value: 50, label: "50"},
        ]}
        id='page-limit'
        defaultValue={limitSearchParams}
        onChange={onChange}
        className='h-2.5rem'
      />
      <Label className='whitespace-nowrap text-14 text-neutral-content'>Per Page</Label>
    </div>
  );
};

export default PageLimit;
