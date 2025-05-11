import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import FormCard from "../components/FormCard";

import useAuthJourney from "../hooks/useAuthJourney";

import { Navigate } from "react-router-dom";

import ConfirmEmailForm from "../components/ConfirmEmailForm";

export const Component = () => {
  usePageTitle("Confirm Email");

  const { userEmail } = useAuthJourney();

  if (!userEmail) return <Navigate to='/auth/login' />;

  return (
    <TransitionPage>
      <section className=''>
        <FormCard>
          <ConfirmEmailForm />
        </FormCard>
      </section>
    </TransitionPage>
  );
};

Component.displayName = "ConfirmEmailPage";
