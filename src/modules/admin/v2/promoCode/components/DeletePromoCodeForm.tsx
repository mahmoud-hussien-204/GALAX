import ConfirmationForm from "@/components/ConfirmationForm";

import useMutation from "@/hooks/useMutation";

import {useQueryClient} from "@tanstack/react-query";

import {apiDeletePromoCodes} from "../services";

import {IPromoCodes} from "../interfaces";

const DeletePromoCodeForm = ({data: dataProps, hide}: IModalComponentProps) => {
  const data = dataProps as IPromoCodes;

  const queryClient = useQueryClient();

  const {mutate, isPending} = useMutation({
    mutationFn: apiDeletePromoCodes,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(data.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["admin-get-promo-code"]});
        hide();
      },
    });
  };

  return (
    <form
      noValidate
      name='delete-promoCode-form'
      id='delete-promoCode-form'
      onSubmit={handleSubmit}
    >
      <ConfirmationForm
        isLoading={isPending}
        message='Are you sure you want to delete this promo Code?'
      />
    </form>
  );
};

export default DeletePromoCodeForm;
