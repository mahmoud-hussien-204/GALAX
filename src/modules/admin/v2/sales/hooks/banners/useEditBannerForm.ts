import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {IBanner, IEditBannerForm} from "../../interfaces";

import useMutation from "@/hooks/useMutation";

import {apiEditBanner} from "../../services";

import {useQueryClient} from "@tanstack/react-query";

import {schema} from "./useCreateBannerForm";

import * as Yup from "yup";

const extenedSchema = schema.shape({
  id: Yup.string().required(),
});

const useEditBannerForm = () => {
  const {hide, data} = useModal();

  const form = useForm<IEditBannerForm>({
    resolver: yupResolver(extenedSchema),
    mode: "onTouched",
    defaultValues: {
      id: (data as IBanner)?.id || "",
    },
  });

  const queryClient = useQueryClient();

  const {mutate, isPending} = useMutation({
    mutationFn: apiEditBanner,
    mutationKey: ["admin-edit-banner"],
  });

  const handleSubmit = form.handleSubmit((values: IEditBannerForm) => {
    mutate(values, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["admin-get-banners"]});
        hide();
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useEditBannerForm;
