import ModalHeader from "@/components/ModalHeader";

import useEditFaqForm from "../hooks/useEditFaqForm";

import AddAndEditFAQForm from "./AddAndEditFAQForm";

import ModalFooter from "@/components/ModalFooter";

const EditFAQForm = () => {
  const {form, handleSubmit, isPending} = useEditFaqForm();

  return (
    <form noValidate name='create-faq-form' id='create-faq-form' onSubmit={handleSubmit}>
      <ModalHeader title='Edit FAQ' />
      {/* @ts-ignore */}
      <AddAndEditFAQForm form={form} />
      <ModalFooter isLoading={isPending} title='Update' />
    </form>
  );
};

export default EditFAQForm;
