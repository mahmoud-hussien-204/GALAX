import ModalHeader from "@/components/ModalHeader";

import ModalFooter from "@/components/ModalFooter";

import useCreatePromoCodeForm from "../hooks/useCreatePromoCodeForm";

import CreateAndEditPromoCodeForm from "./CreateAndEditPromoCodeForm";

import {FormProvider} from "react-hook-form";

const CreatePromoCodeForm = () => {
  const {form, handleSubmit, isPending} = useCreatePromoCodeForm();

  return (
    <FormProvider {...form}>
      <form
        noValidate
        name='create-PromoCode-form'
        id='create-PromoCode-form'
        onSubmit={handleSubmit}
      >
        <ModalHeader title='Create New Promo Code' />
        <CreateAndEditPromoCodeForm form={form} type='create' />
        <ModalFooter isLoading={isPending} title='Create Promo Code' />
      </form>
    </FormProvider>
  );
};

export default CreatePromoCodeForm;
