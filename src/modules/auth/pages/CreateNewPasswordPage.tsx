import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import useAuthJourney from "../hooks/useAuthJourney";

import {Navigate} from "react-router-dom";

import FormCard from "../components/FormCard";

import CreateNewPasswordForm from "../components/CreateNewPasswordForm";

export const Component = () => {
  usePageTitle("Create New Password");

  const {userEmail} = useAuthJourney();

  if (!userEmail) return <Navigate to='/auth/login' />;

  return (
    <TransitionPage>
      <section>
        <FormCard>
          <CreateNewPasswordForm />
        </FormCard>
      </section>
    </TransitionPage>
  );
};

Component.displayName = "CreateNewPasswordPage";
