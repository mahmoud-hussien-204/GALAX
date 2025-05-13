import ConfirmationForm from "@/components/ConfirmationForm";

import useMutation from "@/hooks/useMutation";

import {useQueryClient} from "@tanstack/react-query";

import {apiDeleteBanner} from "../../services";

import {IBanner} from "../../interfaces";

const DeleteForm = ({data: dataProps, hide}: IModalComponentProps) => {
  const data = dataProps as IBanner;

  const queryClient = useQueryClient();

  const {mutate, isPending} = useMutation({
    mutationFn: apiDeleteBanner,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate(data.id, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["admin-get-banners"]});
        hide();
      },
    });
  };

  return (
    <form noValidate name='delete-banner-form' id='delete-banner-form' onSubmit={handleSubmit}>
      <ConfirmationForm
        isLoading={isPending}
        message='Are you sure you want to delete this banner?'
      />
    </form>
  );
};

export default DeleteForm;
