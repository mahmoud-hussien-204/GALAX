import useModal from "@/hooks/useModal";

import {yupResolver} from "@hookform/resolvers/yup";

import {useForm} from "react-hook-form";

import {ICreateGarageForm} from "../../interfaces";

import * as Yup from "yup";

import useMutation from "@/hooks/useMutation";

import {apiCreateGarage} from "../../services";

import {useQueryClient} from "@tanstack/react-query";

import {EnumGarageStatus} from "../../enums";

export const schema: Yup.ObjectSchema<ICreateGarageForm> = Yup.object().shape({
  garage_name: Yup.string().required("Grage name is required"),

  garage_phone: Yup.string().required("Garage phone is required"),

  garage_mobile: Yup.string().required("Garage mobile is required"),

  garage_email: Yup.string().email("Enter a valid email").required("Garage mobile is required"),

  garage_whatsapp: Yup.string().required("Garage whatsapp is required"),

  garage_address: Yup.string().required("Garage address is required"),

  garage_city: Yup.string().required("Garage city is required"),

  garage_description: Yup.string().required("Garage description is required"),

  garage_latitude: Yup.string().nullable(),

  garage_longitude: Yup.string().nullable(),

  expires_at: Yup.string().required("Expires at is required"),

  status: Yup.mixed<EnumGarageStatus>()
    .oneOf(Object.values(EnumGarageStatus), "Invalid status")
    .required("Status is required"),

  garage_logo: Yup.mixed<File | string>()
    .required("Garage logo is required")
    .test("fileType", "Only image files are allowed", (value) => {
      if (typeof value === "string") return true;
      return value ? ["image/jpeg", "image/png", "image/webp"].includes(value.type) : false;
    })
    .test("fileSize", "File size must be less than 5MB", (value) => {
      if (typeof value === "string") return true;
      return value ? value.size <= 5 * 1024 * 1024 : false;
    }),
});

const useCreateBannerForm = () => {
  const {hide} = useModal();

  const form = useForm<ICreateGarageForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const queryClient = useQueryClient();

  const {mutate, isPending} = useMutation({
    mutationFn: apiCreateGarage,
    mutationKey: ["admin-create-garage"],
  });

  const handleSubmit = form.handleSubmit((values: ICreateGarageForm) => {
    mutate(values, {
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["admin-get-garages"]});
        hide();
      },
    });
  });

  return {form, handleSubmit, isPending};
};

export default useCreateBannerForm;
