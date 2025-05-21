import ConfirmationForm from "@/components/ConfirmationForm";

import useMutation from "@/hooks/useMutation";

import {useQueryClient} from "@tanstack/react-query";

import {IGarage} from "../../interfaces";

import {apiDeleteRecoveryListing} from "../../services/recoveryService";

const DeleteRecoveryForm = ({data: dataProps, hide}: IModalComponentProps) => {
  const data = dataProps as IGarage;

  const queryClient = useQueryClient();

  const {mutate, isPending} = useMutation({
    mutationFn: apiDeleteRecoveryListing,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(data.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["admin-get-recovery-listings"]});
        hide();
      },
    });
  };

  return (
    <form noValidate name='delete-service-form' id='delete-service-form' onSubmit={handleSubmit}>
      <ConfirmationForm
        isLoading={isPending}
        message='Are you sure you want to delete this Recovery Service?'
      />
    </form>
  );
};

export default DeleteRecoveryForm;
