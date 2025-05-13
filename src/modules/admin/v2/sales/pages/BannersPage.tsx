import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import ModalProvider from "@/providers/ModalProvider";

import Head from "../components/Head";

import UsersList from "../components/UsersList";

import Modal from "@/components/Modal";

import DeleteForm from "../components/DeleteForm";

import ViewUserForm from "../components/ViewUserForm";

import EditUserForm from "../components/EditUserForm";

import AddUserForm from "../components/AddUserForm";

import SuspendForm from "../components/SuspendForm";

import useQuery from "@/hooks/useQuery";

import {apiGetUsers} from "../services";

import useApiUrlFilter from "@/hooks/useApiUrlFilter";

import {ENUM_USERS_STATUS} from "../enums";

import PhoneVerifyForm from "../components/PhoneVerifyForm";

import EmailVerifyForm from "../components/EmailVerifyForm";

import ActiveUserForm from "../components/ActiveUserForm";

export const Component = () => {
  usePageTitle("Banners");

  const {
    filterSearchParams,
    pageSearchParams: page,
    limitSearchParams: limit,
    searchSearchParams: search,
  } = useApiUrlFilter();

  const type = filterSearchParams as ENUM_USERS_STATUS;

  const {data, isLoading} = useQuery({
    queryFn: () => apiGetUsers(type, page, limit, search),
    queryKey: ["admin-get-users", type, page, limit, search],
  });

  const totalPages = data?.recordsTotal ? Math.ceil(data.recordsTotal / limit) : 1;

  return (
    <ModalProvider>
      <TransitionPage>
        <Head />
        <div className='mt-2rem'>
          <UsersList users={data?.data || []} totalPages={totalPages} isLoading={isLoading} />
        </div>
      </TransitionPage>

      <Modal
        view={ViewUserForm}
        edit={EditUserForm}
        add={AddUserForm}
        suspended={SuspendForm}
        delete={DeleteForm}
        phoneVerify={PhoneVerifyForm}
        emailVerify={EmailVerifyForm}
        active={ActiveUserForm}
      />
    </ModalProvider>
  );
};

Component.displayName = "BannersPage";
