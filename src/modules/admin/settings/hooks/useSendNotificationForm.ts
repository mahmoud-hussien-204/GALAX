import * as Yup from "yup";

import {ISendNotificationsForm} from "../interfaces";

import {useForm} from "react-hook-form";

import {yupResolver} from "@hookform/resolvers/yup";

import useMutation from "@/hooks/useMutation";

import {apiSendNotification} from "../services";

const schema: Yup.ObjectSchema<ISendNotificationsForm> = Yup.object().shape({
  title: Yup.string().required("This field is required"),
  notification_body: Yup.string().required("This field is required"),
});

const useSendNotificationForm = () => {
  const form = useForm<ISendNotificationsForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const {mutate, isPending} = useMutation({
    mutationFn: apiSendNotification,
  });

  const handleSubmit = form.handleSubmit((values: ISendNotificationsForm) => {
    mutate(values);
  });

  return {form, handleSubmit, isPending};
};

export default useSendNotificationForm;
