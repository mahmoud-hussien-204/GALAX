import * as Yup from "yup";

import {IGeneralKycSettingsForm} from "../../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

import useGeneralSettings from "../useGeneralSettings";

import useMutation from "@/hooks/useMutation";

import {apiPostGeneralSettingsKyc} from "../../services";

const schema: Yup.ObjectSchema<IGeneralKycSettingsForm> = Yup.object().shape({
  kyc_enable_for_withdrawal: Yup.string().required("This field is required"),
  kyc_nid_enable_for_withdrawal: Yup.string().required("This field is required"),
  kyc_passport_enable_for_withdrawal: Yup.string().required("This field is required"),
  kyc_driving_enable_for_withdrawal: Yup.string().required("This field is required"),
});

const useGeneralKycSettingsForm = () => {
  const {settings} = useGeneralSettings();

  const form = useForm<IGeneralKycSettingsForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      kyc_enable_for_withdrawal: settings?.settings?.kyc_enable_for_withdrawal || "",
      kyc_nid_enable_for_withdrawal: settings?.settings?.kyc_nid_enable_for_withdrawal || "",
      kyc_passport_enable_for_withdrawal:
        settings?.settings?.kyc_passport_enable_for_withdrawal || "",
      kyc_driving_enable_for_withdrawal:
        settings?.settings?.kyc_driving_enable_for_withdrawal || "",
    },
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiPostGeneralSettingsKyc,
  });

  const handleSubmit = form.handleSubmit((values: IGeneralKycSettingsForm) => {
    mutate(values);
  });

  return {form, handleSubmit, isPending};
};

export default useGeneralKycSettingsForm;
