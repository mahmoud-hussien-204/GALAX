import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import Head from "../components/Head";

import CoinsList from "../components/CoinsList";

import Modal from "@/components/Modal";

import EditCoinForm from "../components/EditCoinForm";

import useQuery from "@/hooks/useQuery";

import useApiUrlFilter from "@/hooks/useApiUrlFilter";

import {apiGetCoins} from "../services";

export const Component = () => {
  usePageTitle("Coins List");

  const {
    pageSearchParams: page,
    limitSearchParams: limit,
    searchSearchParams: search,
  } = useApiUrlFilter();
  const {data, isLoading} = useQuery({
    queryFn: () => apiGetCoins(page, limit, search),
    queryKey: ["admin-get-coins", page, limit, search],
  });

  const totalPages = data?.recordsTotal ? Math.ceil(data.recordsTotal / limit) : 1;

  return (
    <ModalProvider>
      <TransitionPage>
        <Head />
        <div className='mt-2rem'>
          <CoinsList coins={data?.data || []} isLoading={isLoading} totalPages={totalPages} />
        </div>
      </TransitionPage>

      <Modal edit={EditCoinForm} />
    </ModalProvider>
  );
};

Component.displayName = "CoinsPage";
