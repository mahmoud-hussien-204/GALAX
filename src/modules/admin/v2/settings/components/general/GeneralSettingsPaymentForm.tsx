import Button from "@/components/Button";

import useGeneralSettingsPaymentForm from "../../hooks/general/useGeneralSettingsPaymentForm";

import Label from "@/components/Label";

import Input from "@/components/Input";

import ErrorMessage from "@/components/ErrorMessage";

import Title from "@/components/Title";

const GeneralSettingsPaymentForm = () => {
  const {form, handleSubmit, isPending} = useGeneralSettingsPaymentForm();

  return (
    <form
      noValidate
      id='general-settings-twilio-form'
      name='general-settings-twilio-form'
      onSubmit={handleSubmit}
    >
      <div className='mb-1.25rem grid gap-1.25rem sm:grid-cols-2'>
        <div>
          <Label htmlFor='general-settings-twilio-COIN_PAYMENT_PUBLIC_KEY'>
            Coin Payment Public Key
          </Label>
          <Input
            {...form.register("COIN_PAYMENT_PUBLIC_KEY")}
            type='text'
            id='general-settings-twilio-COIN_PAYMENT_PUBLIC_KEY'
            placeholder='Coin Payment Public Key'
            isError={!!form.formState.errors.COIN_PAYMENT_PUBLIC_KEY}
          />
          <ErrorMessage>{form.formState.errors.COIN_PAYMENT_PUBLIC_KEY?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-twilio-COIN_PAYMENT_PRIVATE_KEY'>
            Coin Payment Private Key
          </Label>
          <Input
            {...form.register("COIN_PAYMENT_PRIVATE_KEY")}
            type='text'
            id='general-settings-twilio-COIN_PAYMENT_PRIVATE_KEY'
            placeholder='Coin Payment Private Key'
            isError={!!form.formState.errors.COIN_PAYMENT_PRIVATE_KEY}
          />
          <ErrorMessage>{form.formState.errors.COIN_PAYMENT_PRIVATE_KEY?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-twilio-ipn_merchant_id'>
            Coin Payment IPN Merchant ID
          </Label>
          <Input
            {...form.register("ipn_merchant_id")}
            type='email'
            id='general-settings-twilio-ipn_merchant_id'
            placeholder='Coin Payment IPN Merchant ID'
            isError={!!form.formState.errors.ipn_merchant_id}
          />
          <ErrorMessage>{form.formState.errors.ipn_merchant_id?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-twilio-ipn_secret'>Coin Payment IPN Secret</Label>
          <Input
            {...form.register("ipn_secret")}
            type='email'
            id='general-settings-twilio-ipn_secret'
            placeholder='Coin Payment IPN Secret'
            isError={!!form.formState.errors.ipn_secret}
          />
          <ErrorMessage>{form.formState.errors.ipn_secret?.message}</ErrorMessage>
        </div>
      </div>

      <Title>Stripe Details</Title>

      <div className='mb-1.25rem grid gap-1.25rem sm:grid-cols-2'>
        <div>
          <Label htmlFor='general-settings-twilio-STRIPE_KEY'>Stripe Publish Key</Label>
          <Input
            {...form.register("STRIPE_KEY")}
            type='text'
            id='general-settings-twilio-STRIPE_KEY'
            placeholder='Stripe Publish Key'
            isError={!!form.formState.errors.STRIPE_KEY}
          />
          <ErrorMessage>{form.formState.errors.STRIPE_KEY?.message}</ErrorMessage>
        </div>

        <div>
          <Label htmlFor='general-settings-twilio-STRIPE_SECRET'>Stripe Secret Key</Label>
          <Input
            {...form.register("STRIPE_SECRET")}
            type='text'
            id='general-settings-twilio-STRIPE_SECRET'
            placeholder='Stripe Secret Key'
            isError={!!form.formState.errors.STRIPE_SECRET}
          />
          <ErrorMessage>{form.formState.errors.STRIPE_SECRET?.message}</ErrorMessage>
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

export default GeneralSettingsPaymentForm;
