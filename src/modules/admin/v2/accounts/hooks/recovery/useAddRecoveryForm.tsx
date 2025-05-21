import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import useMutation from "@/hooks/useMutation";
import {IRecoveryListing} from "../../interfaces";
import {apiAddRecoveryListings} from "../../services/recoveryService";
import {recoveryListingSchema} from "../../services/schemas";
import useModal from "@/hooks/useModal";
import {useQueryClient} from "@tanstack/react-query";

function useAddRecoveryForm() {
  const {hide} = useModal();
  const queryClint = useQueryClient();

  const form = useForm<IRecoveryListing>({
    defaultValues: {
      service_logo: null,
      service_description: "",
      service_latitude: "",
      service_longitude: "",
    },
    resolver: yupResolver(recoveryListingSchema),
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiAddRecoveryListings,
  });

  const onSubmit = form.handleSubmit((values: IRecoveryListing) => {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    mutate(formData, {
      onSuccess: () => {
        queryClint.invalidateQueries({queryKey: ["admin-get-recovery-listings"]});
        form.reset();
        hide();
      },
    });
  });

  return {onSubmit, form, isPending};
}

export default useAddRecoveryForm;
