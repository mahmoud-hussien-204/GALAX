import ConfirmationForm from "@/components/ConfirmationForm";

import {useQueryClient} from "@tanstack/react-query";

import useMutation from "@/hooks/useMutation";

import InterceptorHelper from "@/helpers/interceptorHelper";
import useModal from "@/hooks/useModal";

const SuspendForm = ({data: dataProps}: IModalComponentProps) => {
  const {hide} = useModal();

  const data = dataProps as {path: string};

  const queryClient = useQueryClient();

  const {mutate, isPending} = useMutation({
    mutationFn: () => InterceptorHelper.intercept(data.path as string, {}, false),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(null, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["admin-get-users"]});
        hide();
      },
    });
  };

  return (
    <form noValidate name='delete-user-form' id='delete-user-form' onSubmit={handleSubmit}>
      <ConfirmationForm
        isLoading={isPending}
        message='Are you sure you want to Suspend this user?'
      />
    </form>
  );
};

export default SuspendForm;
