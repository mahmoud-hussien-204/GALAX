import ModalHeader from "@/components/ModalHeader";

import ModalFooter from "@/components/ModalFooter";

import useEditCoinForm from "../hooks/useEditCoinForm";

import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import Label from "@/components/Label";

import ModalBody from "@/components/ModalBody";
import FileUploader from "@/components/FileUploader";
import {FormProvider} from "react-hook-form";
import SwitchInput from "@/components/SwitchInput";

const EditCoinForm = () => {
  const {form, handleSubmit} = useEditCoinForm();

  return (
    <FormProvider {...form}>
      <form noValidate name='update-coin-form' id='update-coin-form' onSubmit={handleSubmit}>
        <ModalHeader title='Update Coin' />
        <ModalBody>
          <div className='mb-1.25rem grid items-center gap-1.25rem sm:grid-cols-2'>
            <div>
              <FileUploader name='coin_icon' title='Plan Image' locale />
            </div>
            <div className='mb-1.25rem'>
              <Label htmlFor='update-coin-form-coin-name'>Coin Full Name</Label>
              <Input
                type='text'
                {...form.register("name")}
                placeholder='Enter Coin Full Name'
                id='update-coin-form-coin-name'
                isError={!!form.formState.errors.name}
              />
              <ErrorMessage>{form.formState.errors.name?.message}</ErrorMessage>
            </div>
          </div>

          <div className='mb-1.25rem grid gap-1.25rem md:grid-cols-3'>
            <div>
              <Label htmlFor='update-coin-form-fees'>Withdrawal fees (%)</Label>
              <Input
                type='text'
                {...form.register("fee")}
                placeholder='Enter Withdrawal fees'
                id='update-coin-form-fees'
                isError={!!form.formState.errors.fee}
              />
              <ErrorMessage>{form.formState.errors.fee?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='update-coin-form-minimum-withdrawal'>Minimum Withdrawal</Label>
              <Input
                type='number'
                {...form.register("minimum_withdrawal")}
                placeholder='Minimum Withdrawal
'
                id='update-coin-form-minimum-withdrawal'
                isError={!!form.formState.errors.minimum_withdrawal}
              />
              <ErrorMessage>{form.formState.errors.minimum_withdrawal?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='update-coin-form-maximum-withdrawal'>Maximum Withdrawal</Label>
              <Input
                type='number'
                {...form.register("maximum_withdrawal")}
                placeholder='Maximum Withdrawal
'
                id='update-coin-form-maximum-withdrawal'
                isError={!!form.formState.errors.maximum_withdrawal}
              />
              <ErrorMessage>{form.formState.errors.maximum_withdrawal?.message}</ErrorMessage>
            </div>
          </div>
          <div className='grid w-full grid-cols-2'>
            <div>
              <Label htmlFor='withdrawal-status'>Withdrawal Status </Label>
              <SwitchInput {...form.register("is_withdrawal")} id='withdrawal-status' />
            </div>

            <div>
              <Label htmlFor='status'>Active Status </Label>
              <SwitchInput {...form.register("status")} id='status' />
            </div>
          </div>
        </ModalBody>
        <ModalFooter isLoading={false} title='Update Coin' />
      </form>
    </FormProvider>
  );
};

export default EditCoinForm;
