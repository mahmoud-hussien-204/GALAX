import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import Head from "../components/Head";

import UsersList from "../components/UsersList";

import Modal from "@/components/Modal";

import DeleteForm from "../components/DeleteForm";

import EditPlanForm from "../components/EditPlanForm";

import CreatePlanForm from "../components/CreatePlanForm";

import SettingsForm from "../components/SettingsForm";

import {apiGetPlans} from "../services";

import useApiUrlFilter from "@/hooks/useApiUrlFilter";

import useQuery from "@/hooks/useQuery";

import {ENUM_PLANS_STATUS} from "../enums";

export const Component = () => {
  usePageTitle("Plans List");

  const {
    pageSearchParams: page,
    limitSearchParams: limit,
    searchSearchParams: search,
    filterSearchParams: status,
  } = useApiUrlFilter();

  const {data, isLoading} = useQuery({
    queryFn: () => apiGetPlans(page, limit, search, status as ENUM_PLANS_STATUS),
    queryKey: ["admin-get-plans", page, limit, search, status],
  });

  const totalPages = data?.recordsTotal ? Math.ceil(data.recordsTotal / limit) : 1;

  return (
    <ModalProvider>
      <TransitionPage>
        <Head />
        <div className='mt-2rem'>
          <UsersList isLoading={isLoading} plans={data?.data || []} totalPages={totalPages} />
        </div>
      </TransitionPage>

      <Modal edit={EditPlanForm} add={CreatePlanForm} delete={DeleteForm} settings={SettingsForm} />
    </ModalProvider>
  );
};

Component.displayName = "PlansPage";
