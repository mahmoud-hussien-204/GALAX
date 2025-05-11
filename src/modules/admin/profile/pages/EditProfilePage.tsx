import TransitionPage from "@/components/TransitionPage";

import Card from "@/components/Card";

import Title from "@/components/Title";

import useEditProfile from "../hooks/useEditProfile";

import useAuth from "@/modules/auth/hooks/useAuth";

import Input from "@/components/Input";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import Button from "@/components/Button";

import Select from "@/components/Select";

import {constantCountries, constantGender} from "../constants";

import ChangeUserImage from "../components/ChangeUserImage";

export const Component = () => {
  const {userData} = useAuth();

  const {handleSubmit, form, isPending} = useEditProfile();

  return (
    <TransitionPage>
      <Card>
        <Title>General Information</Title>
        <form name='edit-profile-form' id='edit-profile-form' noValidate onSubmit={handleSubmit}>
          <div className='mb-2rem flex items-center gap-1rem'>
            <ChangeUserImage />
            <div>
              <h5>{userData?.first_name + " " + userData?.last_name}</h5>
              <h6 className='text-neutral-400'>{userData?.email}</h6>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-1.5rem'>
            <div>
              <Label htmlFor='edit-profile-form-fullName'>First Name</Label>
              <Input
                {...form.register("first_name")}
                id='edit-profile-form-firstName'
                placeholder='Enter First name'
                type='text'
                isError={!!form.formState.errors.first_name}
              />
              <ErrorMessage>{form.formState.errors.first_name?.message}</ErrorMessage>
            </div>

            <div>
              <Label htmlFor='edit-profile-form-fullName'>Last Name</Label>
              <Input
                {...form.register("last_name")}
                id='edit-profile-form-lastName'
                placeholder='Enter Last name'
                type='text'
                isError={!!form.formState.errors.last_name}
              />
              <ErrorMessage>{form.formState.errors.last_name?.message}</ErrorMessage>
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
            <div>
              <Label htmlFor='edit-profile-form-country'>Country</Label>
              <Select
                {...form.register("country")}
                options={constantCountries}
                id='edit-profile-form-country'
                isError={!!form.formState.errors.country}
              />
              <ErrorMessage>{form.formState.errors.country?.message}</ErrorMessage>
            </div>

            <div>
              <Label htmlFor='edit-profile-form-country'>Gender</Label>
              <Select
                {...form.register("gender")}
                options={constantGender}
                id='edit-profile-form-country'
                isError={!!form.formState.errors.gender}
              />
              <ErrorMessage>{form.formState.errors.gender?.message}</ErrorMessage>
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
      </Card>
    </TransitionPage>
  );
};

Component.displayName = "EditProfilePage";
