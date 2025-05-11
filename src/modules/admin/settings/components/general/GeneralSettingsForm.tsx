import Button from "@/components/Button";

import useGeneralSettingsForm from "../../hooks/general/useGeneralSettingsForm";

import Label from "@/components/Label";

import Input from "@/components/Input";

import ErrorMessage from "@/components/ErrorMessage";

import Select from "@/components/Select";

import {constantLanguage} from "@/constants";

const GeneralSettingsForm = () => {
  const {form, handleSubmit, isPending} = useGeneralSettingsForm();

  return (
    <form
      noValidate
      id='general-settings-form'
      name='general-settings-form'
      onSubmit={handleSubmit}
    >
      <div className='mb-1.25rem grid gap-1.25rem sm:grid-cols-3'>
        <div>
          <Label htmlFor='general-settings-language'>Select Language</Label>
          <Select
            options={constantLanguage}
            defaultValue=''
            id='global-settings-form-language'
            {...form.register("lang")}
          />
          <ErrorMessage>{form.formState.errors.lang?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-company-name'>Company Name</Label>
          <Input
            {...form.register("company_name")}
            type='text'
            id='general-settings-company-name'
            placeholder='Company Name'
            isError={!!form.formState.errors.company_name}
          />
          <ErrorMessage>{form.formState.errors.company_name?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-numberOfConfirmation'>
            Number of confirmation for Notifier deposit
          </Label>
          <Input
            {...form.register("number_of_confirmation")}
            type='text'
            id='general-settings-numberOfConfirmation'
            placeholder='Number of confirmation'
            isError={!!form.formState.errors.number_of_confirmation}
          />
          <ErrorMessage>{form.formState.errors.number_of_confirmation?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-baseCoinType'>Coin Payment Base Coin Type</Label>
          <Input
            {...form.register("base_coin_type")}
            type='text'
            id='general-settings-baseCoinType'
            placeholder='Coin Payment Base Coin Type'
            isError={!!form.formState.errors.base_coin_type}
          />
          <ErrorMessage>{form.formState.errors.base_coin_type?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-copyRightText'>Copyright Text</Label>
          <Input
            {...form.register("copyright_text")}
            type='text'
            id='general-settings-copyRightText'
            placeholder='Copyright Text'
            isError={!!form.formState.errors.copyright_text}
          />
          <ErrorMessage>{form.formState.errors.copyright_text?.message}</ErrorMessage>
        </div>
      </div>

      <div className='flex items-center gap-0.5rem'>
        <Button type='submit' className='min-w-[160px]' isLoading={isPending}>
          Save Changes
        </Button>
        <Button type='reset' className='btn-neutral min-w-[120px] text-white' disabled={isPending}>
          Reset
        </Button>
      </div>
    </form>
  );
};

export default GeneralSettingsForm;
