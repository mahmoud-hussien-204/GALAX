import ConfirmationForm from "@/components/ConfirmationForm";

import useMutation from "@/hooks/useMutation";

import {useQueryClient} from "@tanstack/react-query";

import {apiDeleteGarage} from "../../services";

import {IGarage} from "../../interfaces";

const DeleteGarageForm = ({data: dataProps, hide}: IModalComponentProps) => {
  const data = dataProps as IGarage;

  const queryClient = useQueryClient();

  const {mutate, isPending} = useMutation({
    mutationFn: apiDeleteGarage,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(data.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["admin-get-garages"]});
        hide();
      },
    });
  };

  return (
    <form noValidate name='delete-garage-form' id='delete-garage-form' onSubmit={handleSubmit}>
      <ConfirmationForm
        isLoading={isPending}
        message='Are you sure you want to delete this Garage?'
      />
    </form>
  );
};

export default DeleteGarageForm;
