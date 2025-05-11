import ModalFooter from "@/components/ModalFooter";

import ModalHeader from "@/components/ModalHeader";

import useSettingsForm from "../hooks/useSettingsForm";

import ModalBody from "@/components/ModalBody";

import Label from "@/components/Label";

import Input from "@/components/Input";

import ErrorMessage from "@/components/ErrorMessage";

const SettingsForm = () => {
  const {form, handleSubmit} = useSettingsForm();

  return (
    <form
      noValidate
      name='membership-settings-form'
      id='membership-settings-form'
      onSubmit={handleSubmit}
    >
      <ModalHeader title='Membership Settings' />
      <ModalBody>
        <div className='mb-1.25rem grid gap-1.25rem md:grid-cols-2'>
          <div>
            <Label htmlFor='membership-settings-form-minimum-amount'>Minimum Amount</Label>
            <Input
              type='text'
              {...form.register("plan_minimum_amount")}
              placeholder='Enter Minimum Amount'
              id='membership-settings-form-minimum-amount'
              isError={!!form.formState.errors.plan_minimum_amount}
            />
            <ErrorMessage>{form.formState.errors.plan_minimum_amount?.message}</ErrorMessage>
          </div>
          <div>
            <Label htmlFor='membership-settings-form-maximum-amount'>Maximum Amount</Label>
            <Input
              type='text'
              {...form.register("plan_maximum_amount")}
              placeholder='Enter Maximum Amount'
              id='membership-settings-form-maximum-amount'
              isError={!!form.formState.errors.plan_maximum_amount}
            />
            <ErrorMessage>{form.formState.errors.plan_maximum_amount?.message}</ErrorMessage>
          </div>
        </div>
      </ModalBody>
      <ModalFooter isLoading={false} title='Save' />
    </form>
  );
};

export default SettingsForm;
