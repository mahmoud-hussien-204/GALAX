import {FormProvider, useForm} from "react-hook-form";

import {IGeneralSettings, IGeneralSettingsForm} from "../interfaces";

import Label from "@/components/Label";

import Input from "@/components/Input";

import ErrorMessage from "@/components/ErrorMessage";

import Button from "@/components/Button";

import useMutation from "@/hooks/useMutation";

import {apiUpdateGeneralSettings} from "../services";

import SwitchInput from "@/components/SwitchInput";

import {FileUploaderStyle2} from "@/components/FileUploader";

import Card from "@/components/Card";

import Select from "@/components/Select";

import Title from "@/components/Title";

import {yupResolver} from "@hookform/resolvers/yup";

import * as Yup from "yup";

const mailEncryptionOptions = [
  {label: "None", value: ""},
  {label: "TLS", value: "tls"},
  {label: "SSL", value: "ssl"},
];

interface IProps {
  data: IGeneralSettings;
}

const schema = Yup.object().shape({
  app_name: Yup.string().required("App name is required"),

  ios_url: Yup.string()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .url("Enter a valid URL")
    .nullable(),

  android_url: Yup.string()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .url("Enter a valid URL")
    .nullable(),

  ios_version: Yup.string()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .matches(/^(\d+\.)?(\d+\.)?(\*|\d+)$/, "Write a valid version (e.g., 15.2.1)")
    .nullable(),

  android_version: Yup.string()
    .transform((value, originalValue) => (originalValue === "" ? null : value))
    .matches(/^(\d+\.)?(\d+\.)?(\*|\d+)$/, "Write a valid version (e.g., 15.2.1)")
    .nullable(),

  mail_port: Yup.number()
    .transform((_, originalValue) => (originalValue === "" ? null : Number(originalValue)))
    .typeError("Mail port must be a number")
    .integer("Mail port must be an integer")
    .min(0, "Mail port must be between 0 and 65535")
    .max(65535, "Mail port must be between 0 and 65535")
    .nullable(),
});

const GeneralSettingForm = ({data}: IProps) => {
  const {mutate: mutateApiUpdateGeneralSettings, isPending} = useMutation({
    mutationFn: apiUpdateGeneralSettings,
  });

  const form = useForm<IGeneralSettingsForm>({
    defaultValues: data,
    // @ts-expect-error fix it later
    resolver: yupResolver(schema),
  });

  const {handleSubmit, register, formState} = form;

  const onSubmit = handleSubmit((data) => {
    mutateApiUpdateGeneralSettings(data);
  });

  return (
    <FormProvider {...form}>
      <form noValidate id='general-settings-form' name='general-settings-form' onSubmit={onSubmit}>
        <Card className='mb-1.5rem'>
          <Title>Basic App Information</Title>
          <div className='grid grid-cols-1 gap-1.25rem sm:grid-cols-2 lg:grid-cols-3'>
            <div>
              <Label htmlFor='general-settings-app-name'>App Name</Label>
              <Input
                {...register("app_name")}
                type='text'
                id='general-settings-app-name'
                placeholder='App Name'
                isError={!!formState.errors.app_name}
              />
              <ErrorMessage>{formState.errors.app_name?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='general-settings-app-email'>App Email</Label>
              <Input
                {...register("app_email")}
                type='email'
                id='general-settings-app-email'
                placeholder='App Email'
                isError={!!formState.errors.app_email}
              />
              <ErrorMessage>{formState.errors.app_email?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='general-settings-app-phone'>App Phone</Label>
              <Input
                {...register("app_phone")}
                type='text'
                id='general-settings-app-phone'
                placeholder='App Phone'
                isError={!!formState.errors.app_phone}
              />
              <ErrorMessage>{formState.errors.app_phone?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='general-settings-app-address'>App Address</Label>
              <Input
                {...register("app_address")}
                type='text'
                id='general-settings-app-address'
                placeholder='App Address'
                isError={!!formState.errors.app_address}
              />
              <ErrorMessage>{formState.errors.app_address?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='general-settings-app-city'>App City</Label>
              <Input
                {...register("app_city")}
                type='text'
                id='general-settings-app-city'
                placeholder='App City'
                isError={!!formState.errors.app_city}
              />
              <ErrorMessage>{formState.errors.app_city?.message}</ErrorMessage>
            </div>
          </div>
        </Card>

        <Card className='mb-1.5rem'>
          <Title>Platform Information</Title>

          <div className='grid grid-cols-1 gap-1.25rem sm:grid-cols-2 lg:grid-cols-3'>
            <div>
              <Label htmlFor='general-settings-ios-version'>iOS Version</Label>
              <Input
                {...register("ios_version")}
                type='text'
                id='general-settings-ios-version'
                placeholder='iOS Version'
                isError={!!formState.errors.ios_version}
              />
              <ErrorMessage>{formState.errors.ios_version?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='general-settings-ios-app-id'>iOS App ID</Label>
              <Input
                {...register("ios_app_id")}
                type='text'
                id='general-settings-ios-app-id'
                placeholder='iOS App ID'
                isError={!!formState.errors.ios_app_id}
              />
              <ErrorMessage>{formState.errors.ios_app_id?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='general-settings-ios-url'>iOS URL</Label>
              <Input
                {...register("ios_url")}
                type='url'
                id='general-settings-ios-url'
                placeholder='iOS URL'
                isError={!!formState.errors.ios_url}
              />
              <ErrorMessage>{formState.errors.ios_url?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='general-settings-android-version'>Android Version</Label>
              <Input
                {...register("android_version")}
                type='text'
                id='general-settings-android-version'
                placeholder='Android Version'
                isError={!!formState.errors.android_version}
              />
              <ErrorMessage>{formState.errors.android_version?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='general-settings-android-package-name'>Android Package Name</Label>
              <Input
                {...register("android_package_name")}
                type='text'
                id='general-settings-android-package-name'
                placeholder='Android Package Name'
                isError={!!formState.errors.android_package_name}
              />
              <ErrorMessage>{formState.errors.android_package_name?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='general-settings-android-url'>Android URL</Label>
              <Input
                {...register("android_url")}
                type='url'
                id='general-settings-android-url'
                placeholder='Android URL'
                isError={!!formState.errors.android_url}
              />
              <ErrorMessage>{formState.errors.android_url?.message}</ErrorMessage>
            </div>
          </div>
        </Card>

        <Card className='mb-1.5rem'>
          <Title>Payment Configuration</Title>
          <div className='grid grid-cols-1 gap-1.25rem sm:grid-cols-2 lg:grid-cols-3'>
            <div>
              <Label htmlFor='general-settings-payment-enabled'>Payment Enabled</Label>
              <SwitchInput
                {...register("payment_enabled")}
                id='general-settings-payment-enabled'
                isError={!!formState.errors.payment_enabled}
              />
              <ErrorMessage>{formState.errors.payment_enabled?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='general-settings-stripe-secret-key'>Stripe Secret Key</Label>
              <Input
                {...register("stripe_secret_key")}
                type='text'
                id='general-settings-stripe-secret-key'
                placeholder='Stripe Secret Key'
                isError={!!formState.errors.stripe_secret_key}
              />
              <ErrorMessage>{formState.errors.stripe_secret_key?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='general-settings-stripe-public-key'>Stripe Public Key</Label>
              <Input
                {...register("stripe_public_key")}
                type='text'
                id='general-settings-stripe-public-key'
                placeholder='Stripe Public Key'
                isError={!!formState.errors.stripe_public_key}
              />
              <ErrorMessage>{formState.errors.stripe_public_key?.message}</ErrorMessage>
            </div>
          </div>
        </Card>

        <Card className='mb-1.5rem'>
          <Title>Mail Configuration</Title>
          <div className='grid grid-cols-1 gap-1.25rem sm:grid-cols-2 lg:grid-cols-3'>
            <div>
              <Label htmlFor='general-settings-mail-host'>Mail Host</Label>
              <Input
                {...register("mail_host")}
                type='text'
                id='general-settings-mail-host'
                placeholder='Mail Host'
                isError={!!formState.errors.mail_host}
              />
              <ErrorMessage>{formState.errors.mail_host?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='general-settings-mail-port'>Mail Port</Label>
              <Input
                {...register("mail_port")}
                type='text'
                id='general-settings-mail-port'
                placeholder='Mail Port'
                isError={!!formState.errors.mail_port}
              />
              <ErrorMessage>{formState.errors.mail_port?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='general-settings-mail-username'>Mail Username</Label>
              <Input
                {...register("mail_username")}
                type='text'
                id='general-settings-mail-username'
                placeholder='Mail Username'
                autoComplete='username'
                isError={!!formState.errors.mail_username}
              />
              <ErrorMessage>{formState.errors.mail_username?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='general-settings-mail-password'>Mail Password</Label>
              <Input
                {...register("mail_password")}
                type='password'
                id='general-settings-mail-password'
                placeholder='Mail Password'
                autoComplete='new-password'
                isError={!!formState.errors.mail_password}
              />
              <ErrorMessage>{formState.errors.mail_password?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='general-settings-mail-encryption'>Mail Encryption</Label>
              <Select
                {...register("mail_encryption")}
                options={mailEncryptionOptions}
                id='general-settings-mail-encryption'
                isError={!!formState.errors.mail_encryption}
              />
              <ErrorMessage>{formState.errors.mail_encryption?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='general-settings-mail-from-address'>Mail From Address</Label>
              <Input
                {...register("mail_from_address")}
                type='email'
                id='general-settings-mail-from-address'
                placeholder='Mail From Address'
                isError={!!formState.errors.mail_from_address}
              />
              <ErrorMessage>{formState.errors.mail_from_address?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='general-settings-mail-from-name'>Mail From Name</Label>
              <Input
                {...register("mail_from_name")}
                type='text'
                id='general-settings-mail-from-name'
                placeholder='Mail From Name'
                isError={!!formState.errors.mail_from_name}
              />
              <ErrorMessage>{formState.errors.mail_from_name?.message}</ErrorMessage>
            </div>
          </div>
        </Card>

        <Card className='mb-1.5rem'>
          <Title>Branding & Icons</Title>
          <div className='grid grid-cols-1 gap-1.25rem sm:grid-cols-2 lg:grid-cols-3'>
            <div>
              <Label htmlFor='general-settings-app-logo'>Application Logo</Label>
              <FileUploaderStyle2
                name='app_logo'
                title='Application Logo'
                id='general-settings-app-logo'
              />
              <ErrorMessage>{formState.errors.app_logo?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='general-settings-ios-app-icon'>iOS App Icon</Label>
              <FileUploaderStyle2
                name='ios_app_icon'
                title='iOS App Icon'
                id='general-settings-ios-app-icon'
              />
              <ErrorMessage>{formState.errors.ios_url?.message}</ErrorMessage>
            </div>
            <div>
              <Label htmlFor='general-settings-app-favicon'>Favicon</Label>
              <FileUploaderStyle2
                name='app_favicon'
                title='Favicon'
                id='general-settings-app-favicon'
              />
              <ErrorMessage>{formState.errors.app_favicon?.message}</ErrorMessage>
            </div>
          </div>
        </Card>

        <div className='flex items-center gap-0.5rem'>
          <Button type='submit' className='min-w-[160px]' isLoading={isPending}>
            Save Changes
          </Button>
          <Button
            type='reset'
            className='btn-neutral min-w-[120px] text-white'
            disabled={isPending}
          >
            Reset
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default GeneralSettingForm;
