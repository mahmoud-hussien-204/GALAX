import TransitionPage from "@/components/TransitionPage";

import Card from "@/components/Card";

import Title from "@/components/Title";

import useUpdateProfileInfoForm from "../hooks/useUpdateProfileInfoForm";

import Input from "@/components/Input";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import Button from "@/components/Button";

import {FormProvider} from "react-hook-form";

import {FileUploaderStyle2} from "@/components/FileUploader";

export const Component = () => {
  const {handleSubmit, form, isPending} = useUpdateProfileInfoForm();

  return (
    <TransitionPage>
      <Card>
        <Title>General Information</Title>
        <FormProvider {...form}>
          <form name='edit-profile-form' id='edit-profile-form' noValidate onSubmit={handleSubmit}>
            <div className='mb-2rem'>
              <FileUploaderStyle2 name='avatar' title='Profile Image' />
            </div>

            <div className='grid gap-1.5rem sm:grid-cols-2 lg:grid-cols-3'>
              <div>
                <Label htmlFor='edit-profile-form-fullName'>Name</Label>
                <Input
                  {...form.register("name")}
                  id='edit-profile-form-firstName'
                  placeholder='Enter name'
                  type='text'
                  isError={!!form.formState.errors.name}
                />
                <ErrorMessage>{form.formState.errors.name?.message}</ErrorMessage>
              </div>

              <div>
                <Label htmlFor='edit-profile-form-email'>Email</Label>
                <Input
                  {...form.register("email")}
                  id='edit-profile-form-email'
                  placeholder='Enter email'
                  type='text'
                  isError={!!form.formState.errors.email}
                />
                <ErrorMessage>{form.formState.errors.email?.message}</ErrorMessage>
              </div>
              <div>
                <Label htmlFor='edit-profile-form-phone'>Phone</Label>
                <Input
                  {...form.register("phone")}
                  id='edit-profile-form-phone'
                  placeholder='Enter phone'
                  type='text'
                  isError={!!form.formState.errors.phone}
                />
                <ErrorMessage>{form.formState.errors.phone?.message}</ErrorMessage>
              </div>
            </div>

            <div className='mt-2rem flex items-center gap-0.5rem'>
              <Button type='submit' className='min-w-[160px]' isLoading={isPending}>
                Save Changes
              </Button>
              <Button type='reset' className='btn-neutral min-w-[120px] text-white'>
                Reset
              </Button>
            </div>
          </form>
        </FormProvider>
      </Card>
    </TransitionPage>
  );
};

Component.displayName = "EditProfilePage";
