import Button from "@/components/Button";

import useGeneralSettingsDefaultCoinForm from "../../hooks/general/useGeneralSettingsDefaultCoinForm";

import Label from "@/components/Label";

import Input from "@/components/Input";

import ErrorMessage from "@/components/ErrorMessage";

const GeneralSettingsDefaultCoinForm = () => {
  const {form, handleSubmit, isPending} = useGeneralSettingsDefaultCoinForm();

  return (
    <form
      noValidate
      id='general-settings-default-coin-form'
      name='general-settings-default-coin-form'
      onSubmit={handleSubmit}
    >
      <div className='mb-1.25rem grid gap-1.25rem sm:grid-cols-2'>
        <div>
          <Label htmlFor='general-settings-default-coin-coin_name'>Default Coin/Token Name</Label>
          <Input
            {...form.register("coin_name")}
            type='text'
            id='general-settings-default-coin-coin_name'
            placeholder='Default Coin/Token Name'
            isError={!!form.formState.errors.coin_name}
          />
          <ErrorMessage>{form.formState.errors.coin_name?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-default-coin-coin_price'>
            Default Token Price (in USD)
          </Label>
          <Input
            {...form.register("coin_price")}
            type='text'
            id='general-settings-default-coin-coin_price'
            placeholder='Default Token Price (in USD)'
            isError={!!form.formState.errors.coin_price}
          />
          <ErrorMessage>{form.formState.errors.coin_price?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-default-coin-contract_coin_name'>
            Base Coin Name For Token
          </Label>
          <Input
            {...form.register("contract_coin_name")}
            type='text'
            id='general-settings-default-coin-contract_coin_name'
            placeholder='Base Coin Name For Token'
            isError={!!form.formState.errors.contract_coin_name}
          />
          <ErrorMessage>{form.formState.errors.contract_coin_name?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-default-coin-chain_link'>Chain Link</Label>
          <Input
            {...form.register("chain_link")}
            type='text'
            id='general-settings-default-coin-chain_link'
            placeholder='Chain Link'
            isError={!!form.formState.errors.chain_link}
          />
          <ErrorMessage>{form.formState.errors.chain_link?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-default-coin-chain_id'>Chain ID</Label>
          <Input
            {...form.register("chain_id")}
            type='text'
            id='general-settings-default-coin-chain_id'
            placeholder='Chain ID'
            isError={!!form.formState.errors.chain_id}
          />
          <ErrorMessage>{form.formState.errors.chain_id?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-default-coin-contract_address'>Contract Address</Label>
          <Input
            {...form.register("contract_address")}
            type='text'
            id='general-settings-default-coin-contract_address'
            placeholder='Contract Address'
            isError={!!form.formState.errors.contract_address}
          />
          <ErrorMessage>{form.formState.errors.contract_address?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-default-coin-wallet_address'>Wallet Address</Label>
          <Input
            {...form.register("wallet_address")}
            type='text'
            id='general-settings-default-coin-wallet_address'
            placeholder='Wallet Address'
            isError={!!form.formState.errors.wallet_address}
          />
          <ErrorMessage>{form.formState.errors.wallet_address?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-default-coin-private_key'>Private Key</Label>
          <Input
            {...form.register("private_key")}
            type='text'
            id='general-settings-default-coin-private_key'
            placeholder='Private Key'
            isError={!!form.formState.errors.private_key}
          />
          <ErrorMessage>{form.formState.errors.private_key?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-default-coin-contract_decimal'>Decimal</Label>
          <Input
            {...form.register("contract_decimal")}
            type='text'
            id='general-settings-default-coin-contract_decimal'
            placeholder='Decimal'
            isError={!!form.formState.errors.contract_decimal}
          />
          <ErrorMessage>{form.formState.errors.contract_decimal?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-default-coin-gas_limit'>Gas Limit</Label>
          <Input
            {...form.register("gas_limit")}
            type='text'
            id='general-settings-default-coin-gas_limit'
            placeholder='Gas Limit'
            isError={!!form.formState.errors.gas_limit}
          />
          <ErrorMessage>{form.formState.errors.gas_limit?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='general-settings-default-coin-max_send_limit'>
            Max Send Limit (Per Day)
          </Label>
          <Input
            {...form.register("max_send_limit")}
            type='text'
            id='general-settings-default-coin-max_send_limit'
            placeholder='Max Send Limit (Per Day)'
            isError={!!form.formState.errors.max_send_limit}
          />
          <ErrorMessage>{form.formState.errors.max_send_limit?.message}</ErrorMessage>
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

export default GeneralSettingsDefaultCoinForm;
