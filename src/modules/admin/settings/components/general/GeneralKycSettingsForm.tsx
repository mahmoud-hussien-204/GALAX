import Button from "@/components/Button";

import useGeneralKycSettingsForm from "../../hooks/general/useGeneralKycSettingsForm";

import Label from "@/components/Label";

import Select from "@/components/Select";

import {constantEnableAndDisablesOptions} from "@/constants";

import ErrorMessage from "@/components/ErrorMessage";

const GeneralKycSettingsForm = () => {
  const {form, handleSubmit, isPending} = useGeneralKycSettingsForm();

  return (
    <form
      noValidate
      id='general-kyc-settings-form'
      name='general-kyc-settings-form'
      onSubmit={handleSubmit}
    >
      <div className='mb-1.25rem grid gap-1.25rem sm:grid-cols-4'>
        <div>
          <Label htmlFor='general-kyc-settings-kycMandatory'>KYC mandatory</Label>
          <Select
            options={constantEnableAndDisablesOptions}
            defaultValue=''
            id='global-settings-form-kycMandatory'
            {...form.register("kyc_enable_for_withdrawal")}
          />
          <ErrorMessage>{form.formState.errors.kyc_enable_for_withdrawal?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-kyc-settings-nidVerificationMandatory'>NID verification</Label>
          <Select
            options={constantEnableAndDisablesOptions}
            defaultValue=''
            id='global-settings-form-nidVerificationMandatory'
            {...form.register("kyc_nid_enable_for_withdrawal")}
          />
          <ErrorMessage>
            {form.formState.errors.kyc_nid_enable_for_withdrawal?.message}
          </ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-kyc-settings-drivingLicenseVerificationMandatory'>
            Driving license verification
          </Label>
          <Select
            options={constantEnableAndDisablesOptions}
            defaultValue=''
            id='global-settings-form-drivingLicenseVerificationMandatory'
            {...form.register("kyc_driving_enable_for_withdrawal")}
          />
          <ErrorMessage>
            {form.formState.errors.kyc_driving_enable_for_withdrawal?.message}
          </ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-kyc-settings-passportVerificationMandatory'>
            Passport verification{" "}
          </Label>
          <Select
            options={constantEnableAndDisablesOptions}
            defaultValue=''
            id='global-settings-form-passportVerificationMandatory'
            {...form.register("kyc_passport_enable_for_withdrawal")}
          />
          <ErrorMessage>
            {form.formState.errors.kyc_passport_enable_for_withdrawal?.message}
          </ErrorMessage>
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

export default GeneralKycSettingsForm;
