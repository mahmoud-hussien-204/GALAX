import ModalHeader from "@/components/ModalHeader";

import ModalFooter from "@/components/ModalFooter";

import useEditBannerForm from "../hooks/useEditBannerForm";

import CreateAndEditBannerForm from "./CreateAndEditBannerForm";

import {FormProvider} from "react-hook-form";

const EditBannerForm = () => {
  const {form, handleSubmit, isPending} = useEditBannerForm();

  return (
    <FormProvider {...form}>
      <form noValidate name='edit-banner-form' id='edit-banner-form' onSubmit={handleSubmit}>
        <ModalHeader title='Edit Banner' />
        <CreateAndEditBannerForm form={form} type='edit' />
        <ModalFooter isLoading={isPending} title='Update Banner' />
      </form>
    </FormProvider>
  );
};

export default EditBannerForm;
