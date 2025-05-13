import useApiUrlFilter from "@/hooks/useApiUrlFilter";

import Select from "./Select";

import {useCallback} from "react";

interface IProps {
  options: {label: string; value: string}[];
}

const PageFilterSelect = ({options}: IProps) => {
  const {filterSearchParams, setSearchParams, searchParams} = useApiUrlFilter();

  const onChangeSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("filter", e.target.value);
      newSearchParams.set("page", "1");
      setSearchParams(newSearchParams);
    },
    [searchParams, setSearchParams]
  );

  return (
    <Select
      options={options}
      id='page-filter-select'
      onChange={(e) => onChangeSelect(e)}
      defaultValue={filterSearchParams}
      className={`max-w-max ${filterSearchParams ? "text-neutral" : "!text-neutral-500"}`}
    />
  );
};

export default PageFilterSelect;
