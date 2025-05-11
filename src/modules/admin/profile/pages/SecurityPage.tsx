import TransitionPage from "@/components/TransitionPage";

import UpdatePasswordForm from "../components/UpdatePasswordForm";

import Card from "@/components/Card";

import Title from "@/components/Title";

export const Component = () => {
  return (
    <TransitionPage>
      <div className='mb-2rem'>
        <Card>
          <Title>Change Password</Title>
          <UpdatePasswordForm />
        </Card>
      </div>
    </TransitionPage>
  );
};

Component.displayName = "SecurityPage";
