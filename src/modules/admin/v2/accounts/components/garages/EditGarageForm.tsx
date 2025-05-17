import ModalHeader from "@/components/ModalHeader";

import ModalFooter from "@/components/ModalFooter";

import useEditGarageForm from "../../hooks/garages/useEditGarageForm";

import CreateAndEditGarageForm from "./CreateAndEditGarageForm";

import {FormProvider} from "react-hook-form";

const EditGarageForm = () => {
  const {form, handleSubmit, isPending} = useEditGarageForm();

  const {isDirty} = form.formState;

  return (
    <FormProvider {...form}>
      <form noValidate name='edit-Garage-form' id='edit-Garage-form' onSubmit={handleSubmit}>
        <ModalHeader title='Edit Garage' />
        {/* @ts-expect-error fix later */}
        <CreateAndEditGarageForm form={form} type='edit' />
        <ModalFooter isLoading={isPending} disabled={!isDirty} title='Update Garage' />
      </form>
    </FormProvider>
  );
};

export default EditGarageForm;
