import {FormProvider} from "react-hook-form";
import AddAndEditRecoveryForm from "./AddAndEditRecoveryForm";
import ModalHeader from "@/components/ModalHeader";
import ModalFooter from "@/components/ModalFooter";
import useAddRecoveryForm from "../../hooks/revcovery/useAddRecoveryForm";

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
