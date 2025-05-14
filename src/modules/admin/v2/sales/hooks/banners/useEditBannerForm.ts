import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {IBanner, IEditBannerForm} from "../../interfaces";

import useMutation from "@/hooks/useMutation";

import {apiEditBanner} from "../../services";

import {useQueryClient} from "@tanstack/react-query";

import {schema} from "./useCreateBannerForm";

import * as Yup from "yup";
import AppHelper from "@/helpers/appHelper";

const extenedSchema = schema.shape({
  id: Yup.string().required(),
});

const useEditBannerForm = () => {
  const {hide, data: dataProps} = useModal();

  const data = dataProps as IBanner;

  const form = useForm<IEditBannerForm>({
    resolver: yupResolver(extenedSchema),
    mode: "onTouched",
    defaultValues: {
      id: data?.id || "",
      image: (data as IBanner)?.image || "",
      title: data?.title || "",
      link: data?.link || "",
      status: data?.status || "",
    },
  });

  const queryClient = useQueryClient();

  const {mutate, isPending} = useMutation({
    mutationFn: apiEditBanner,
    mutationKey: ["admin-edit-banner"],
  });

  const handleSubmit = form.handleSubmit((values: IEditBannerForm) => {
    const payload = AppHelper.getDirtyFields(values, form.formState.dirtyFields);

    mutate(
      {...payload, id: values.id, title: values.title},
      {
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ["admin-get-banners"]});
          hide();
        },
      }
    );
  });

  return {form, handleSubmit, isPending};
};

export default useEditBannerForm;
