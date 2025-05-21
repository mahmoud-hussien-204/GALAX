import ModalHeader from "@/components/ModalHeader";

import ModalFooter from "@/components/ModalFooter";

import CreateAndEditPromoCodeForm from "./CreateAndEditPromoCodeForm";

import {FormProvider} from "react-hook-form";

import useEditPromoCodeForm from "../hooks/useEditPromoCodeForm";

const EditPromoCodeForm = () => {
  const {form, handleSubmit, isPending} = useEditPromoCodeForm();

  const {isDirty} = form.formState;

  return (
    <FormProvider {...form}>
      <form noValidate name='edit-PromoCode-form' id='edit-PromoCode-form' onSubmit={handleSubmit}>
        <ModalHeader title='Edit PromoCode' />
        {/* @ts-expect-error fix later */}
        <CreateAndEditPromoCodeForm form={form} type='edit' />
        <ModalFooter isLoading={isPending} disabled={!isDirty} title='Update Promo Code' />
      </form>
    </FormProvider>
  );
};

export default EditPromoCodeForm;
