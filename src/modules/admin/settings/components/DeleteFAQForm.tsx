import ConfirmationForm from "@/components/ConfirmationForm";

import useMutation from "@/hooks/useMutation";

import {IFAQ} from "../interfaces";

import {apiDeleteFaq} from "../services";

const DeleteFAQForm = ({data: dataProps, hide}: IModalComponentProps) => {
  const data = dataProps as IFAQ;

  const {mutate, isPending, queryClient} = useMutation({
    mutationFn: apiDeleteFaq,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(data.action.Delete, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["admin-get-faq-list"]});
        hide();
      },
    });
  };

  return (
    <form name='delete-bank' onSubmit={handleSubmit}>
      <ConfirmationForm
        isLoading={isPending}
        message='Are you sure you want to delete this Question?'
        submitButtonTitle='Yes, Delete'
      />
    </form>
  );
};

export default DeleteFAQForm;
