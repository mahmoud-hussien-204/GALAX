import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {IGarage, IEditGarageForm} from "../../interfaces";

import useMutation from "@/hooks/useMutation";

import {apiEditGarage} from "../../services";

import {useQueryClient} from "@tanstack/react-query";

import {schema} from "./useCreateGarageForm";

import * as Yup from "yup";

import AppHelper from "@/helpers/appHelper";

const extendSchema = schema.shape({
  id: Yup.string().required(),
});

const useEditBannerForm = () => {
  const {hide, data: dataProps} = useModal();

  const data = dataProps as IGarage;

  const form = useForm<IEditGarageForm>({
    resolver: yupResolver(extendSchema),
    mode: "onTouched",
    defaultValues: {
      ...data,
      id: data?.id || "",
    },
  });

  const queryClient = useQueryClient();

  const {mutate, isPending} = useMutation({
    mutationFn: apiEditGarage,
    mutationKey: ["admin-edit-garage"],
  });

  const handleSubmit = form.handleSubmit((values: IEditGarageForm) => {
    const payload = AppHelper.getDirtyFields(values, form.formState.dirtyFields);

    mutate(
      {...payload, id: values.id},
      {
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ["admin-get-garages"]});
          hide();
        },
      }
    );
  });

  return {form, handleSubmit, isPending};
};

export default useEditBannerForm;
