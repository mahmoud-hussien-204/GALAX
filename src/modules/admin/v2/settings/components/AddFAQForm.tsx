import ModalHeader from "@/components/ModalHeader";

import AddAndEditFAQForm from "./AddAndEditFAQForm";

import ModalFooter from "@/components/ModalFooter";

import useCreateFaqForm from "../hooks/useCreateFaqForm";

const AddFAQForm = () => {
  const {form, handleSubmit, isPending} = useCreateFaqForm();

  return (
    <form noValidate name='create-faq-form' id='create-faq-form' onSubmit={handleSubmit}>
      <ModalHeader title='Create new FAQ' />
      <AddAndEditFAQForm form={form} />
      <ModalFooter isLoading={isPending} title='Create FAQ' />
    </form>
  );
};

export default AddFAQForm;
