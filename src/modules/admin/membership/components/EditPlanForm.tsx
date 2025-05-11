import ModalHeader from "@/components/ModalHeader";

import CreateAndEditPlanForm from "./CreateAndEditPlanForm";

import ModalFooter from "@/components/ModalFooter";

import useEditPlanForm from "../hooks/useEditPlanForm";

const EditPlanForm = () => {
  const {form, handleSubmit, isPending} = useEditPlanForm();

  return (
    <form noValidate name='edit-plan-form' id='edit-plan-form' onSubmit={handleSubmit}>
      <ModalHeader title='Edit Plan' />
      <CreateAndEditPlanForm form={form} />
      <ModalFooter isLoading={isPending} title='Update Plan' />
    </form>
  );
};

export default EditPlanForm;
