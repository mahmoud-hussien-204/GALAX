import TransitionPage from "@/components/TransitionPage";

import Card from "@/components/Card";

import Title from "@/components/Title";

import Input from "@/components/Input";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import Button from "@/components/Button";

import useUpdatePasswordForm from "../hooks/useUpdatePasswordForm";

export const Component = () => {
  const {form, handleSubmit, isPending} = useUpdatePasswordForm();

  return (
    <TransitionPage>
      <div className='mb-2rem'>
        <Card>
          <Title>Change Password</Title>
          <form
            noValidate
            id='update-password-form'
            name='update-password-form'
            onSubmit={handleSubmit}
          >
            <input type='hidden' name='username' value='user123' aria-hidden='true' />
            <div className='grid grid-cols-3 gap-1rem'>
              <div className='mb-1.25rem'>
                <Label htmlFor='update-password-current-password-form'>Current Password</Label>
                <Input
                  {...form.register("current_password")}
                  type='password'
                  id='update-password-current-password-form'
                  placeholder='Current Password'
                  isError={!!form.formState.errors.current_password}
                  autoComplete='new-password'
                />
                <ErrorMessage>{form.formState.errors.current_password?.message}</ErrorMessage>
              </div>
              <div className='mb-1.25rem'>
                <Label htmlFor='update-password-new-password-form'>new Password</Label>
                <Input
                  {...form.register("new_password")}
                  type='password'
                  id='update-password-new-password-form'
                  placeholder='New Password'
                  isError={!!form.formState.errors.new_password}
                  autoComplete='new-password'
                />
                <ErrorMessage>{form.formState.errors.new_password?.message}</ErrorMessage>
              </div>
              <div className='mb-2rem'>
                <Label htmlFor='update-password-confirm-password-form'>Confirm Password</Label>
                <Input
                  {...form.register("confirm_new_password")}
                  type='password'
                  id='update-password-confirm-password-form'
                  placeholder='Confirm Password'
                  isError={!!form.formState.errors.confirm_new_password}
                  autoComplete='new-password'
                />
                <ErrorMessage>{form.formState.errors.confirm_new_password?.message}</ErrorMessage>
              </div>
            </div>

            <Button type='submit' className='min-w-[160px]' isLoading={isPending}>
              Save Changes
            </Button>
          </form>
        </Card>
      </div>
    </TransitionPage>
  );
};

Component.displayName = "SecurityPage";
