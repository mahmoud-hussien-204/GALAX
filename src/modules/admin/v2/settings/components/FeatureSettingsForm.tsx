import Button from "@/components/Button";

import useFeatureSettingsForm from "../hooks/useFeatureSettingsForm";

import Label from "@/components/Label";

import Input from "@/components/Input";

import Title from "@/components/Title";

import ErrorMessage from "@/components/ErrorMessage";

import SwitchInput from "@/components/SwitchInput";

const FeatureSettingsForm = () => {
  const {form, handleSubmit, isPending} = useFeatureSettingsForm();

  return (
    <form
      noValidate
      id='feature-settings-form'
      name='feature-settings-form'
      onSubmit={handleSubmit}
    >
      <Title>Multi-signature Pocket</Title>
      <div className='mb-1.25rem grid gap-1.25rem border-b border-b-neutral-800 pb-1rem md:grid-cols-3'>
        <div>
          <Label htmlFor='feature-settings-maxCo'>Max Co User For One Pocket</Label>
          <Input
            {...form.register("max_co_wallet_user")}
            type='text'
            placeholder='Enter Max Co User For One Pocket'
            id='feature-settings-maxCo'
            isError={!!form.formState.errors.max_co_wallet_user}
          />
          <ErrorMessage>{form.formState.errors.max_co_wallet_user?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='feature-settings-approvals'>
            The (%) Users Approval Needed For A Withdraw
          </Label>
          <Input
            {...form.register("co_wallet_withdrawal_user_approval_percentage")}
            type='text'
            placeholder='The (%) Users Approval Needed For A Withdraw'
            id='feature-settings-approvals'
            isError={!!form.formState.errors.co_wallet_withdrawal_user_approval_percentage}
          />
          <ErrorMessage>
            {form.formState.errors.co_wallet_withdrawal_user_approval_percentage?.message}
          </ErrorMessage>
        </div>
        <div>
          <Label htmlFor='feature-settings-multiSignatureStatus'>
            Multi-signature Pocket Feature Status
          </Label>
          <SwitchInput
            {...form.register("co_wallet_feature_active")}
            id='feature-settings-multiSignatureStatus'
            isError={!!form.formState.errors.co_wallet_feature_active}
          />
          <ErrorMessage>{form.formState.errors.co_wallet_feature_active?.message}</ErrorMessage>
        </div>
      </div>

      <Title>Enable Google Re capcha</Title>
      <div className='mb-1.25rem grid gap-1.25rem border-b border-b-neutral-800 pb-1rem md:grid-cols-3'>
        <div>
          <Label htmlFor='feature-settings-googleReCaptchaSecretKey'>Captcha Secret Key</Label>
          <Input
            {...form.register("NOCAPTCHA_SECRET")}
            type='text'
            placeholder='Enter Captcha Secret Key'
            id='feature-settings-googleReCaptchaSecretKey'
            isError={!!form.formState.errors.NOCAPTCHA_SECRET}
          />
          <ErrorMessage>{form.formState.errors.NOCAPTCHA_SECRET?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='feature-settings-googleReCaptchaSiteKey'>Captcha Site Key</Label>
          <Input
            {...form.register("NOCAPTCHA_SITEKEY")}
            type='text'
            placeholder='Enter Captcha Site Key'
            id='feature-settings-googleReCaptchaSiteKey'
            isError={!!form.formState.errors.NOCAPTCHA_SITEKEY}
          />
          <ErrorMessage>{form.formState.errors.NOCAPTCHA_SITEKEY?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='feature-settings-googleReCaptchaStatus'>
            Enable Google Re capcha Status
          </Label>
          <SwitchInput
            {...form.register("google_recapcha")}
            id='feature-settings-googleReCaptchaStatus'
            isError={!!form.formState.errors.google_recapcha}
          />
          <ErrorMessage>{form.formState.errors.google_recapcha?.message}</ErrorMessage>
        </div>
      </div>

      <Title>Swap Enable/Disable</Title>
      <div className='mb-1.25rem grid gap-1.25rem border-b border-b-neutral-800 pb-1rem md:grid-cols-3'>
        <div>
          <Label htmlFor='feature-settings-swapStatus'>Enable/Disable Swap Feature</Label>
          <SwitchInput
            {...form.register("swap_enabled")}
            id='feature-settings-swapStatus'
            isError={!!form.formState.errors.swap_enabled}
          />
          <ErrorMessage>{form.formState.errors.swap_enabled?.message}</ErrorMessage>
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

export default FeatureSettingsForm;
