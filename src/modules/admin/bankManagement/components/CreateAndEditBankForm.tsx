import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import Label from "@/components/Label";

import ModalBody from "@/components/ModalBody";

import {UseFormReturn} from "react-hook-form";

import {ICreateBankForm, IEditBankForm} from "../interfaces";

import Select from "@/components/Select";

import {constantCountriesList, constantStatusOptions} from "@/constants";

import Textarea from "@/components/Textarea";

interface IProps {
  form: UseFormReturn<ICreateBankForm | IEditBankForm>;
}

const CreateAndEditBankForm = ({form}: IProps) => {
  return (
    <ModalBody>
      <div className='mb-1.25rem'>
        <Label htmlFor='bank-form-account_holder_name'>Account Holder Name</Label>
        <Input
          type='text'
          {...form.register("account_holder_name")}
          placeholder='Account Holder Name'
          id='bank-form-account_holder_name'
          isError={!!form.formState.errors.account_holder_name}
        />
        <ErrorMessage>{form.formState.errors.account_holder_name?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='bank-form-account_holder_address'>Account Holder Address</Label>
        <Input
          type='text'
          {...form.register("account_holder_address")}
          placeholder='Account Holder Address'
          id='bank-form-account_holder_address'
          isError={!!form.formState.errors.account_holder_address}
        />
        <ErrorMessage>{form.formState.errors.account_holder_address?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='bank-form-bank_name'>Bank Name</Label>
        <Input
          type='text'
          {...form.register("bank_name")}
          placeholder='Bank Name'
          id='bank-form-bank_name'
          isError={!!form.formState.errors.bank_name}
        />
        <ErrorMessage>{form.formState.errors.bank_name?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='bank-form-bank_address'>Bank Address</Label>
        <Input
          type='text'
          {...form.register("bank_address")}
          placeholder='Bank Address'
          id='bank-form-bank_address'
          isError={!!form.formState.errors.bank_address}
        />
        <ErrorMessage>{form.formState.errors.bank_address?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='bank-form-iban'>IBAN</Label>
        <Input
          type='text'
          {...form.register("iban")}
          placeholder='Enter IBAN'
          id='bank-form-iban'
          isError={!!form.formState.errors.iban}
        />
        <ErrorMessage>{form.formState.errors.iban?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='bank-form-swift_code'>Swift Code</Label>
        <Input
          type='text'
          {...form.register("swift_code")}
          placeholder='Enter Swift Code'
          id='bank-form-swift_code'
          isError={!!form.formState.errors.swift_code}
        />
        <ErrorMessage>{form.formState.errors.swift_code?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem grid grid-cols-2 gap-1.25rem'>
        <div>
          <Label htmlFor='bank-form-country'>Country</Label>
          <Select
            {...form.register("country")}
            options={constantCountriesList}
            id='bank-form-country'
            isError={!!form.formState.errors.country}
          />
          <ErrorMessage>{form.formState.errors.country?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='bank-form-status'>Activation Status</Label>
          <Select
            {...form.register("status")}
            options={constantStatusOptions}
            id='bank-form-status'
            isError={!!form.formState.errors.status}
          />
          <ErrorMessage>{form.formState.errors.status?.message}</ErrorMessage>
        </div>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='bank-form-swift_code'>Short Note</Label>
        <Textarea
          {...form.register("note")}
          placeholder='Enter Short Note'
          id='bank-form-note'
          isError={!!form.formState.errors.note}
        />
        <ErrorMessage>{form.formState.errors.note?.message}</ErrorMessage>
      </div>
    </ModalBody>
  );
};

export default CreateAndEditBankForm;
