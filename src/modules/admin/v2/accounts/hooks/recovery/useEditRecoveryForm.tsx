import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";
import useMutation from "@/hooks/useMutation";
import {IRecoveryListing} from "../../interfaces";
import {apiUpdateRecoveryListing} from "../../services/recoveryService";
import useModal from "@/hooks/useModal";
import {recoveryListingSchema} from "../../services/schemas";
import {useQueryClient} from "@tanstack/react-query";

function useEditRecoveryForm() {
  const {data, hide} = useModal();
  const service = data as IRecoveryListing;

  const queryClint = useQueryClient();

  const form = useForm<IRecoveryListing>({
    defaultValues: {
      ...service,
    },
    resolver: yupResolver(recoveryListingSchema),
  });

  const {mutate, isPending} = useMutation({
    mutationFn: (data: FormData) => apiUpdateRecoveryListing(service.id, data),
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

export default useEditRecoveryForm;
