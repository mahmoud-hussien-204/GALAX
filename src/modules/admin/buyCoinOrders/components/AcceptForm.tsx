import ConfirmationForm from "@/components/ConfirmationForm";

import useMutation from "@/hooks/useMutation";

import {IBuyCoinOrder} from "../interfaces";

import {apiAcceptBuyCoinOrder} from "../services";

type IProps = IBuyCoinOrder;

const AcceptForm = ({data: dataProps, hide}: IModalComponentProps) => {
  const data = dataProps as IProps;

  const {mutate, isPending, queryClient} = useMutation({
    mutationFn: apiAcceptBuyCoinOrder,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(data.actions.accept, {
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
        message='Are you sure you want to accept this order'
        submitButtonTitle='Yes, Accept'
      />
    </form>
  );
};

export default AcceptForm;
