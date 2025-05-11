import ConfirmationForm from "@/components/ConfirmationForm";

import {IBuyCoinOrder} from "../interfaces";

import useMutation from "@/hooks/useMutation";

import {apiRejectBuyCoinOrder} from "../services";

type IProps = IBuyCoinOrder;

const RejectForm = ({data: dataProps, hide}: IModalComponentProps) => {
  const data = dataProps as IProps;

  const {mutate, isPending, queryClient} = useMutation({
    mutationFn: apiRejectBuyCoinOrder,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(data.actions.reject, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["admin-get-buy-coin-orders"]});
        hide();
      },
    });
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <ConfirmationForm
        isLoading={isPending}
        message='Are you sure you want to reject this order'
        submitButtonTitle='Yes, Reject'
      />
    </form>
  );
};

export default RejectForm;
