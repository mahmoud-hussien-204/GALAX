import ModalHeader from "@/components/ModalHeader";

import ModalFooter from "@/components/ModalFooter";

import useCreateBannerForm from "../hooks/useCreateBannerForm";

import CreateAndEditBannerForm from "./CreateAndEditBannerForm";

import {FormProvider} from "react-hook-form";

const CreateBannerForm = () => {
  const {form, handleSubmit, isPending} = useCreateBannerForm();

  return (
    <FormProvider {...form}>
      <form noValidate name='create-banner-form' id='create-banner-form' onSubmit={handleSubmit}>
        <ModalHeader title='Create New Banner' />
        <CreateAndEditBannerForm form={form} type='create' />
        <ModalFooter isLoading={isPending} title='Create Banner' />
      </form>
    </FormProvider>
  );
};

export default CreateBannerForm;
