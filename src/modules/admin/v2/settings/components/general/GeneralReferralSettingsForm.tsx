import Label from "@/components/Label";

import useGeneralReferralSettingsForm from "../../hooks/general/useGeneralReferralSettingsForm";

import Input from "@/components/Input";

import ErrorMessage from "@/components/ErrorMessage";

import Button from "@/components/Button";

const GeneralReferralSettingsForm = () => {
  const {form, handleSubmit, isPending} = useGeneralReferralSettingsForm();

  return (
    <form
      noValidate
      id='general-referral-settings-form'
      name='general-referral-settings-form'
      onSubmit={handleSubmit}
    >
      <div className='mb-1.25rem grid gap-1.25rem sm:grid-cols-4'>
        <div>
          <Label htmlFor='general-referral-settings-referralRewardForSignUp'>
            Referral reward for signUp
          </Label>
          <Input
            {...form.register("referral_signup_reward")}
            type='text'
            id='general-referral-settings-referralRewardForSignUp'
            placeholder='Referral reward for signUp'
            isError={!!form.formState.errors.referral_signup_reward}
          />
          <ErrorMessage>{form.formState.errors.referral_signup_reward?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-referral-settings-level1'>Level 1 (%)</Label>
          <Input
            {...form.register("fees_level1")}
            type='text'
            id='general-referral-settings-level1'
            placeholder='Level 1 (%)
'
            isError={!!form.formState.errors.fees_level1}
          />
          <ErrorMessage>{form.formState.errors.fees_level1?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-referral-settings-level2'>Level 2 (%)</Label>
          <Input
            {...form.register("fees_level2")}
            type='text'
            id='general-referral-settings-level2'
            placeholder='Level 2 (%)
'
            isError={!!form.formState.errors.fees_level2}
          />
          <ErrorMessage>{form.formState.errors.fees_level2?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-referral-settings-level3'>Level 3 (%)</Label>
          <Input
            {...form.register("fees_level3")}
            type='text'
            id='general-referral-settings-level3'
            placeholder='Level 3 (%)
'
            isError={!!form.formState.errors.fees_level3}
          />
          <ErrorMessage>{form.formState.errors.fees_level3?.message}</ErrorMessage>
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

export default GeneralReferralSettingsForm;
