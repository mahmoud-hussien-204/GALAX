import Input from "@/components/Input";

import FormCardTitle from "./FormCardTitle";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import Button from "@/components/Button";

import useEmailVerifyForm from "../hooks/useEmailVerifyForm";

import ResendCode from "@/components/ResendCode";

const EmailVerifyForm = () => {
  const {form, handleSubmit, isPending} = useEmailVerifyForm();

  return (
    <form onSubmit={handleSubmit} noValidate id='email-verify-form'>
      <FormCardTitle title='Email Verification' subtitle='Enter Code sent to your email address' />

      <div className='my-1.25rem'>
        <Label htmlFor='register-form-password'>Code</Label>
        <div className='relative'>
          <Input
            {...form.register("code")}
            type={"text"}
            placeholder='OTP Code'
            isError={!!form.formState.errors.code}
          />
          <ResendCode email={form.getValues("email")} />
        </div>

        <ErrorMessage>{form.formState.errors.code?.message}</ErrorMessage>
      </div>

      <Button type='submit' className='w-full' isLoading={isPending}>
        Verify
      </Button>
    </form>
  );
};

export default EmailVerifyForm;
