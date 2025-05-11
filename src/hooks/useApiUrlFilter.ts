import {useSearchParams} from "react-router-dom";

export default function useApiUrlFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageSearchParams = searchParams.get("page") || 1;

  const searchSearchParams = searchParams.get("search") || "";

  const limitSearchParams = searchParams.get("limit") || 10;

  const filterSearchParams = searchParams.get("filter") || "";

  const tabSearchParams = searchParams.get("tab") || "";

  const idParams = searchParams.get("id") || "";

  return {
    searchParams,
    setSearchParams,
    searchSearchParams,
    pageSearchParams: Number(pageSearchParams),
    limitSearchParams: Number(limitSearchParams),
    filterSearchParams,
    tabSearchParams,
    idParams: Number(idParams),
  };
}
