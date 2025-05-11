import Button from "@/components/Button";

import useGeneralSettingsTwilioForm from "../../hooks/general/useGeneralSettingsTwilioForm";

import Label from "@/components/Label";

import Input from "@/components/Input";

import ErrorMessage from "@/components/ErrorMessage";

const GeneralSettingsTwilioForm = () => {
  const {form, handleSubmit, isPending} = useGeneralSettingsTwilioForm();

  return (
    <form
      noValidate
      id='general-settings-twilio-form'
      name='general-settings-twilio-form'
      onSubmit={handleSubmit}
    >
      <div className='mb-1.25rem grid gap-1.25rem sm:grid-cols-3'>
        <div>
          <Label htmlFor='general-settings-twilio-twillo_secret_key'>Twilio secret key</Label>
          <Input
            {...form.register("twillo_secret_key")}
            type='text'
            id='general-settings-twilio-twillo_secret_key'
            placeholder='Twilio secret key'
            isError={!!form.formState.errors.twillo_secret_key}
          />
          <ErrorMessage>{form.formState.errors.twillo_secret_key?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-twilio-twillo_auth_token'>Auth Token</Label>
          <Input
            {...form.register("twillo_auth_token")}
            type='text'
            id='general-settings-twilio-twillo_auth_token'
            placeholder='Auth Token'
            isError={!!form.formState.errors.twillo_auth_token}
          />
          <ErrorMessage>{form.formState.errors.twillo_auth_token?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-twilio-twillo_number'>Twilio Number</Label>
          <Input
            {...form.register("twillo_number")}
            type='email'
            id='general-settings-twilio-twillo_number'
            placeholder='Twilio Number'
            isError={!!form.formState.errors.twillo_number}
          />
          <ErrorMessage>{form.formState.errors.twillo_number?.message}</ErrorMessage>
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

export default GeneralSettingsTwilioForm;
