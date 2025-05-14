import {FormProvider} from "react-hook-form";
import AddAndEditRecoveryForm from "./AddAndEditRecoveryForm";
import useAddRecoveryForm from "../../hooks/useAddRecoveryForm";
import ModalHeader from "@/components/ModalHeader";
import ModalFooter from "@/components/ModalFooter";

function AddRecoveryForm() {
  const {onSubmit, form, isPending} = useAddRecoveryForm();
  return (
    <FormProvider {...form}>
      <form noValidate id='create-recovery-form' onSubmit={onSubmit}>
        <ModalHeader title='Create Service' />
        <AddAndEditRecoveryForm form={form} />
        <ModalFooter title='Create' isLoading={isPending} />
      </form>
    </FormProvider>
  );
}

export default AddRecoveryForm;
