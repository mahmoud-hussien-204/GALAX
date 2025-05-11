import ConfirmationForm from "@/components/ConfirmationForm";
import InterceptorHelper from "@/helpers/interceptorHelper";
import useModal from "@/hooks/useModal";
import useMutation from "@/hooks/useMutation";
import {useQueryClient} from "@tanstack/react-query";

const PhoneVerifyForm = ({data: dataProps}: IModalComponentProps) => {
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
    <form noValidate name='phone-verfiy-form' id='phone-verfiy-form' onSubmit={handleSubmit}>
      <ConfirmationForm
        isLoading={isPending}
        message='Are you sure you want to Verfiy Phone Number of this user?'
      />
    </form>
  );
};

export default PhoneVerifyForm;
