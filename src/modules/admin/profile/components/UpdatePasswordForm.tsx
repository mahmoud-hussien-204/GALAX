import Input from "@/components/Input";

import Label from "@/components/Label";

import useUpdatePasswordForm from "../hooks/useUpdatePasswordForm";

import ErrorMessage from "@/components/ErrorMessage";

import Button from "@/components/Button";

const UpdatePasswordForm = () => {
  const {form, handleSubmit, isPending} = useUpdatePasswordForm();

  return (
    <form noValidate id='update-password-form' name='update-password-form' onSubmit={handleSubmit}>
      <input type='hidden' name='username' value='user123' aria-hidden='true' />
      <div className='grid grid-cols-3 gap-1rem'>
        <div className='mb-1.25rem'>
          <Label htmlFor='update-password-current-password-form'>Current Password</Label>
          <Input
            {...form.register("password")}
            type='password'
            id='update-password-current-password-form'
            placeholder='Current Password'
            isError={!!form.formState.errors.password}
            autoComplete='new-password'
          />
          <ErrorMessage>{form.formState.errors.password?.message}</ErrorMessage>
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

      <div className='flex items-center gap-0.5rem'>
        <Button type='submit' className='min-w-[160px]' isLoading={isPending}>
          Save Changes
        </Button>
        <Button type='reset' className='btn-neutral min-w-[120px] text-white'>
          Reset
        </Button>
      </div>
    </form>
  );
};

export default UpdatePasswordForm;
