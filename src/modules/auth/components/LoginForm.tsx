import Input from "@/components/Input";

import useLoginForm from "../hooks/useLoginForm";

import FormCardTitle from "./FormCardTitle";

import usePasswordVisibility from "@/hooks/usePasswordVisibility";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import InputWithIconContainer from "@/components/InputWithIconContainer";

import IconEmail from "@/components/icons/IconEmail";

import IconEye from "@/components/icons/IconEye";

import Button from "@/components/Button";
import {Link} from "react-router-dom";

const LoginForm = () => {
  const {form, handleSubmit, isPending} = useLoginForm();

  const {inputType, toggleVisibility} = usePasswordVisibility();

  return (
    <form onSubmit={handleSubmit} noValidate id='login-form'>
      <FormCardTitle
        title='Welcome Back!'
        subtitle={<>Glade to see you again, Login in to your account</>}
      />

      <div className='mb-1.25rem mt-1.88rem'>
        <Label htmlFor='login-form-email'>E-mail </Label>
        <InputWithIconContainer icon={<IconEmail />}>
          <Input
            {...form.register("email")}
            type='email'
            id='login-form-email'
            placeholder='Email'
            isError={!!form.formState.errors.email}
            autoComplete='username'
          />
        </InputWithIconContainer>
        <ErrorMessage>{form.formState.errors.email?.message}</ErrorMessage>
      </div>

      <div className='relative mb-3rem'>
        <Label htmlFor='login-form-password'>Password</Label>
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
            id='login-form-password'
            placeholder='Password'
            isError={!!form.formState.errors.password}
            autoComplete='current-password'
          />
        </InputWithIconContainer>
        <ErrorMessage>{form.formState.errors.password?.message}</ErrorMessage>
        <Link
          to='/auth/reset-password'
          className='absolute end-0 top-[82px] text-12 transition-colors duration-200 hover:text-primary'
        >
          Forgot password?
        </Link>
      </div>

      <Button type='submit' className='w-full' isLoading={isPending}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
