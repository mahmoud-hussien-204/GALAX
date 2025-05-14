import Card from "@/components/Card";

import Title from "@/components/Title";

import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import SendNotificationForm from "../components/SendNotificationForm";

export const Component = () => {
  usePageTitle("Notifications");

  return (
    <TransitionPage>
      <Card>
        <Title>Send Notification</Title>
        <SendNotificationForm />
      </Card>
    </TransitionPage>
  );
};

Component.displayName = "NotificationsPage";
