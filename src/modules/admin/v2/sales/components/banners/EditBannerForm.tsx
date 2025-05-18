import ModalHeader from "@/components/ModalHeader";

import ModalFooter from "@/components/ModalFooter";

import useEditBannerForm from "../../hooks/banners/useEditBannerForm";

import CreateAndEditBannerForm from "./CreateAndEditBannerForm";

import {FormProvider} from "react-hook-form";

const EditBannerForm = () => {
  const {form, handleSubmit, isPending} = useEditBannerForm();

  const {isDirty} = form.formState;

  return (
    <FormProvider {...form}>
      <form noValidate name='edit-banner-form' id='edit-banner-form' onSubmit={handleSubmit}>
        <ModalHeader title='Edit Banner' />
        {/* @ts-expect-error fix later */}
        <CreateAndEditBannerForm form={form} type='edit' />
        <ModalFooter isLoading={isPending} disabled={!isDirty} title='Update Banner' />
      </form>
    </FormProvider>
  );
};

export default EditBannerForm;
