import ConfirmationForm from "@/components/ConfirmationForm";

import useMutation from "@/hooks/useMutation";

import {IBankItem} from "../interfaces";

import {apiDeleteBank} from "../services";

const DeleteBankForm = ({data: dataProps, hide}: IModalComponentProps) => {
  const data = dataProps as IBankItem;

  const {mutate, isPending, queryClient} = useMutation({
    mutationFn: apiDeleteBank,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(data.action.Delete, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["admin-get-banks-list"]});
        hide();
      },
    });
  };

  return (
    <form name='delete-bank' onSubmit={handleSubmit}>
      <ConfirmationForm
        isLoading={isPending}
        message='Are you sure you want to delete this bank?'
        submitButtonTitle='Yes, Delete'
      />
    </form>
  );
};

export default DeleteBankForm;
