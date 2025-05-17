import ModalHeader from "@/components/ModalHeader";

import ModalFooter from "@/components/ModalFooter";

import useCreateGarageForm from "../../hooks/garages/useCreateGarageForm";

import CreateAndEditGarageForm from "./CreateAndEditGarageForm";

import {FormProvider} from "react-hook-form";

const CreateGarageForm = () => {
  const {form, handleSubmit, isPending} = useCreateGarageForm();

  return (
    <FormProvider {...form}>
      <form noValidate name='create-Garage-form' id='create-Garage-form' onSubmit={handleSubmit}>
        <ModalHeader title='Create New Garage' />
        <CreateAndEditGarageForm form={form} type='create' />
        <ModalFooter isLoading={isPending} title='Create Garage' />
      </form>
    </FormProvider>
  );
};

export default CreateGarageForm;
