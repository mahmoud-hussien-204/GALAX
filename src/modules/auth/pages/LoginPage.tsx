import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import FormCard from "../components/FormCard";

import LoginForm from "../components/LoginForm";

export const Component = () => {
  usePageTitle("Login");
  return (
    <TransitionPage>
      <section className=''>
        <FormCard>
          <LoginForm />
        </FormCard>
      </section>
    </TransitionPage>
  );
};

Component.displayName = "LoginPage";
