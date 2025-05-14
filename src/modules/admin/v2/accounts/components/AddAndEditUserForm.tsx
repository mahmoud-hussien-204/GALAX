import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import Label from "@/components/Label";

import ModalBody from "@/components/ModalBody";

import {UseFormReturn} from "react-hook-form";

import {IAddUserForm} from "../interfaces";

import Select from "@/components/Select";

import {constantRoles} from "@/constants";

interface IProps {
  form: UseFormReturn<IAddUserForm>;
  type: "add" | "edit";
}

const AddAndEditUserForm = ({form, type}: IProps) => {
  return (
    <ModalBody>
      <div className='mb-1.25rem grid gap-1.25rem sm:grid-cols-2'>
        <div>
          <Label htmlFor='user-form-first-name'>First Name</Label>
          <Input
            type='text'
            {...form.register("first_name")}
            placeholder='Enter First Name'
            id='user-form-first-name'
            isError={!!form.formState.errors.first_name}
          />
          <ErrorMessage>{form.formState.errors.first_name?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='user-form-last-name'>Last Name</Label>
          <Input
            type='text'
            {...form.register("last_name")}
            placeholder='Enter last Name'
            id='user-form-last-name'
            isError={!!form.formState.errors.last_name}
          />
          <ErrorMessage>{form.formState.errors.last_name?.message}</ErrorMessage>
        </div>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='user-form-email'>Email</Label>
        <Input
          type='email'
          {...form.register("email")}
          placeholder='Enter email'
          id='user-form-email'
          isError={!!form.formState.errors.email}
        />
        <ErrorMessage>{form.formState.errors.email?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='user-form-phone-number'>Phone Number</Label>
        <Input
          type='text'
          {...form.register("phone")}
          placeholder='Enter phone number'
          id='user-form-phone-number'
          isError={!!form.formState.errors.phone}
        />
        <ErrorMessage>{form.formState.errors.phone?.message}</ErrorMessage>
      </div>

      {type == "add" && (
        <div className='mb-1.25rem'>
          <Label htmlFor='user-form-role'>Select User Role</Label>
          <Select
            {...form.register("role")}
            options={constantRoles}
            id='user-form-role'
            isError={!!form.formState.errors.role}
          />
          <ErrorMessage>{form.formState.errors.role?.message}</ErrorMessage>
        </div>
      )}
    </ModalBody>
  );
};

export default AddAndEditUserForm;
