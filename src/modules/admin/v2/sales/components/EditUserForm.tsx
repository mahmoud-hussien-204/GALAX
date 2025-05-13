import ModalHeader from "@/components/ModalHeader";

import AddAndEditUserForm from "./AddAndEditUserForm";

import ModalFooter from "@/components/ModalFooter";

import useEditUserForm from "../hooks/useEditUserForm";

const EditUserForm = () => {
  const {form, handleSubmit, isPending} = useEditUserForm();

  return (
    <form noValidate name='add-user-form' id='withdraw-form' onSubmit={handleSubmit}>
      <ModalHeader title='Edit User' />
      {/* @ts-ignore */}
      <AddAndEditUserForm form={form} type='edit' />
      <ModalFooter isLoading={isPending} title='Update User' />
    </form>
  );
};

export default EditUserForm;
