import Input from "@/components/Input";

import FormCardTitle from "./FormCardTitle";

import usePasswordVisibility from "@/hooks/usePasswordVisibility";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import InputWithIconContainer from "@/components/InputWithIconContainer";

import IconEye from "@/components/icons/IconEye";

import Button from "@/components/Button";

import useCreateNewPasswordForm from "../hooks/useCreateNewPasswordForm";

const CreateNewPasswordForm = () => {
  const { form, handleSubmit, isPending } = useCreateNewPasswordForm();

  const { inputType, toggleVisibility } = usePasswordVisibility();

  const { inputType: confirmPasswordInputType, toggleVisibility: confirmPasswordToggleVisibility } =
    usePasswordVisibility();

  return (
    <form onSubmit={handleSubmit} noValidate id='create-new-password-form'>
      <FormCardTitle
        title='Create new password'
        subtitle='Secure your account with a new password, Set a strong password to protect your account.'
      />

      <div className='my-1.25rem'>
        <Label htmlFor='register-form-password'>Code</Label>
        <Input
          {...form.register("code")}
          type={"text"}
          placeholder='OTP Code'
          isError={!!form.formState.errors.code}
        />
        <ErrorMessage>{form.formState.errors.code?.message}</ErrorMessage>
      </div>

      <div className='my-1.25rem'>
        <Label htmlFor='register-form-password'>Password</Label>
        <InputWithIconContainer
          icon={
            <IconEye
              svgProps={{
                onClick: toggleVisibility,
              }}
            />
          }
        >
          <Input
            {...form.register("password")}
            type={inputType}
            id='register-form-password'
            placeholder='Password'
            isError={!!form.formState.errors.password}
            autoComplete='new-password'
          />
        </InputWithIconContainer>
        <ErrorMessage>{form.formState.errors.password?.message}</ErrorMessage>
      </div>

      <div className='mb-2rem'>
        <Label htmlFor='register-form-confirm-password'>Confirm Password</Label>
        <InputWithIconContainer
          icon={
            <IconEye
              svgProps={{
                onClick: confirmPasswordToggleVisibility,
              }}
            />
          }
        >
          <Input
            {...form.register("password_confirmation")}
            type={confirmPasswordInputType}
            id='register-form-confirm-password'
            placeholder='Password'
            isError={!!form.formState.errors.password_confirmation}
            autoComplete='new-password'
          />
        </InputWithIconContainer>
        <ErrorMessage>{form.formState.errors.password_confirmation?.message}</ErrorMessage>
      </div>

      <Button type='submit' isLoading={isPending} className='w-full'>
        Reset Password
      </Button>
    </form>
  );
};

export default CreateNewPasswordForm;
