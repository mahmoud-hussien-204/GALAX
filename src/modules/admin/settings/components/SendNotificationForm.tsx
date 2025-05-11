import Button from "@/components/Button";

import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import Label from "@/components/Label";

import useSendNotificationForm from "../hooks/useSendNotificationForm";
import Textarea from "@/components/Textarea";

const SendNotificationForm = () => {
  const {form, handleSubmit, isPending} = useSendNotificationForm();

  return (
    <form
      noValidate
      name='send-notification-form'
      id='send-notification-form'
      onSubmit={handleSubmit}
    >
      <div className='mb-1.25rem'>
        <Label htmlFor='send-notification-form-title'>Title</Label>
        <Input
          {...form.register("title")}
          type='text'
          placeholder='Enter Notification Title'
          id='send-notification-form-title'
          isError={!!form.formState.errors.title}
        />
        <ErrorMessage>{form.formState.errors.title?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='send-notification-form-notification_body'>Body</Label>
        <Textarea
          {...form.register("notification_body")}
          placeholder='Enter Notification Body'
          id='send-notification-form-notification_body'
          isError={!!form.formState.errors.notification_body}
        />
        <ErrorMessage>{form.formState.errors.notification_body?.message}</ErrorMessage>
      </div>
      <div className='flex items-center gap-0.5rem'>
        <Button type='submit' className='min-w-[160px]' isLoading={isPending}>
          Send Notification
        </Button>
        <Button type='reset' disabled={isPending} className='btn-neutral min-w-[120px] text-white'>
          Reset
        </Button>
      </div>
    </form>
  );
};

export default SendNotificationForm;
