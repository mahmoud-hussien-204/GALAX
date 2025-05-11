import Button from "@/components/Button";

import usePaymentMethodsForm from "../hooks/usePaymentMethodsForm";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import SwitchInput from "@/components/SwitchInput";

const PaymentMethodsForm = () => {
  const {form, handleSubmit, isPending} = usePaymentMethodsForm();

  return (
    <form
      noValidate
      id='payment-methods-settings-form'
      name='payment-methods-settings-form'
      onSubmit={handleSubmit}
    >
      <div className='mb-1.25rem grid gap-1.25rem sm:grid-cols-3'>
        <div className='flex gap-0.75rem'>
          <Label htmlFor='payment-methods-coinPayment'>Coin Payment</Label>
          <SwitchInput
            {...form.register("payment_method_coin_payment")}
            id='payment-methods-coinPayment'
            isError={!!form.formState.errors.payment_method_coin_payment}
          />
          <ErrorMessage>{form.formState.errors.payment_method_coin_payment?.message}</ErrorMessage>
        </div>
        <div className='flex gap-0.75rem'>
          <Label htmlFor='payment-methods-bankDeposit'>Bank Deposit</Label>
          <SwitchInput
            {...form.register("payment_method_bank_deposit")}
            id='payment-methods-bankDeposit'
            isError={!!form.formState.errors.payment_method_bank_deposit}
          />
          <ErrorMessage>{form.formState.errors.payment_method_bank_deposit?.message}</ErrorMessage>
        </div>
        <div className='flex gap-0.75rem'>
          <Label htmlFor='payment-methods-creditCard'>Credit card</Label>
          <SwitchInput
            {...form.register("payment_method_stripe")}
            id='payment-methods-creditCard'
            isError={!!form.formState.errors.payment_method_stripe}
          />
          <ErrorMessage>{form.formState.errors.payment_method_stripe?.message}</ErrorMessage>
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

export default PaymentMethodsForm;
