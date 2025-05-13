import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {ICreateBannerForm} from "../../interfaces";

import * as Yup from "yup";

import useMutation from "@/hooks/useMutation";

import {apiCreateBanner} from "../../services";

import {useQueryClient} from "@tanstack/react-query";

import {EnumBannerStatus} from "../../enums";

export const schema: Yup.ObjectSchema<ICreateBannerForm> = Yup.object().shape({
  title: Yup.string().required("Title is required"),

  link: Yup.string().url("Link must be a valid URL").required("Link is required"),

  status: Yup.mixed<EnumBannerStatus>()
    .oneOf(Object.values(EnumBannerStatus), "Invalid status")
    .required("Status is required"),

  image: Yup.mixed<File>()
    .required("Image is required")
    .test("fileType", "Only image files are allowed", (value) =>
      value ? ["image/jpeg", "image/png", "image/webp"].includes(value.type) : false
    )
    .test("fileSize", "File size must be less than 5MB", (value) =>
      value ? value.size <= 5 * 1024 * 1024 : false
    ),
});

const useCreateBannerForm = () => {
  const {hide} = useModal();

  const form = useForm<ICreateBannerForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const queryClient = useQueryClient();

  const {mutate, isPending} = useMutation({
    mutationFn: apiCreateBanner,
    mutationKey: ["admin-create-banner"],
  });

  const handleSubmit = form.handleSubmit((values: ICreateBannerForm) => {
    mutate(values, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["admin-get-banners"]});
        hide();
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useCreateBannerForm;
