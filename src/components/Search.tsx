import {useCallback} from "react";

import IconSearch from "./icons/IconSearch";

import Input from "./Input";

import InputWithIconContainer from "./InputWithIconContainer";

import useApiUrlFilter from "@/hooks/useApiUrlFilter";

interface IProps {
  placeholder: string;
}

let debounce: NodeJS.Timeout;

const Search = ({placeholder}: IProps) => {
  const {searchSearchParams, searchParams, setSearchParams} = useApiUrlFilter();

  const handleSearchInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set("search", e.target.value);
        newSearchParams.set("page", "1");
        setSearchParams(newSearchParams);
      }, 500);
    },
    [searchParams, setSearchParams]
  );

  return (
    <InputWithIconContainer icon={<IconSearch />}>
      <Input
        type='search'
        placeholder={placeholder}
        onChange={(e) => handleSearchInput(e)}
        defaultValue={searchSearchParams}
      />
    </InputWithIconContainer>
  );
};

export default Search;
