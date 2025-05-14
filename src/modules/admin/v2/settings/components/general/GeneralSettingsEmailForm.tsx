import Button from "@/components/Button";

import useGeneralSettingsEmailForm from "../../hooks/general/useGeneralSettingsEmailForm";

import Label from "@/components/Label";

import Input from "@/components/Input";

import ErrorMessage from "@/components/ErrorMessage";

const GeneralSettingsEmailForm = () => {
  const {form, handleSubmit, isPending} = useGeneralSettingsEmailForm();

  return (
    <form
      noValidate
      id='general-settings-email-form'
      name='general-settings-email-form'
      onSubmit={handleSubmit}
    >
      <div className='mb-1.25rem grid gap-1.25rem sm:grid-cols-3'>
        <div>
          <Label htmlFor='general-settings-email-mail_host'>Email Host</Label>
          <Input
            {...form.register("mail_host")}
            type='text'
            id='general-settings-email-mail_host'
            placeholder='Email Host'
            isError={!!form.formState.errors.mail_host}
          />
          <ErrorMessage>{form.formState.errors.mail_host?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-email-mail_port'>Email Port</Label>
          <Input
            {...form.register("mail_port")}
            type='text'
            id='general-settings-email-mail_port'
            placeholder='Email Port'
            isError={!!form.formState.errors.mail_port}
          />
          <ErrorMessage>{form.formState.errors.mail_port?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-email-mail_username'>Email Username</Label>
          <Input
            {...form.register("mail_username")}
            type='email'
            id='general-settings-email-mail_username'
            placeholder='Email Username'
            isError={!!form.formState.errors.mail_username}
          />
          <ErrorMessage>{form.formState.errors.mail_username?.message}</ErrorMessage>
        </div>
      </div>

      <div className='mb-1.25rem grid gap-1.25rem sm:grid-cols-3'>
        <div>
          <Label htmlFor='general-settings-email-mail_password'>Email Password</Label>
          <Input
            {...form.register("mail_password")}
            type='password'
            id='general-settings-email-mail_password'
            placeholder='Email Password'
            isError={!!form.formState.errors.mail_password}
          />
          <ErrorMessage>{form.formState.errors.mail_password?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-email-mail_encryption'>Mail Encryption</Label>
          <Input
            {...form.register("mail_encryption")}
            type='text'
            id='general-settings-email-mail_encryption'
            placeholder='Mail Encryption'
            isError={!!form.formState.errors.mail_encryption}
          />
          <ErrorMessage>{form.formState.errors.mail_encryption?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-email-mail_from_address'>Mail From Address</Label>
          <Input
            {...form.register("mail_from_address")}
            type='email'
            id='general-settings-email-mail_from_address'
            placeholder='Mail From Address'
            isError={!!form.formState.errors.mail_from_address}
          />
          <ErrorMessage>{form.formState.errors.mail_from_address?.message}</ErrorMessage>
        </div>
      </div>

      <div className='flex items-center gap-0.5rem'>
        <Button type='submit' className='min-w-[160px]' isLoading={isPending}>
          Save Changes
        </Button>
        <Button type='reset' disabled={isPending} className='btn-neutral min-w-[120px] text-white'>
          Reset
        </Button>
      </div>
    </form>
  );
};

export default GeneralSettingsEmailForm;
