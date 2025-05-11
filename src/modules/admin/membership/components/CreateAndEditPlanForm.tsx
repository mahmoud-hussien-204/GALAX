import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import Label from "@/components/Label";

import ModalBody from "@/components/ModalBody";

import {FormProvider, UseFormReturn} from "react-hook-form";

import Select from "@/components/Select";

import Textarea from "@/components/Textarea";

import FileUploader from "@/components/FileUploader";

import {ICreatePlanForm, IEditPlanForm, IPlanData} from "../interfaces";

import {constantPlanActivationStatus} from "../constants";

import useQuery from "@/hooks/useQuery";

import useModal from "@/hooks/useModal";

import {useMemo} from "react";

import {apiGetPlansFormData} from "../services";

import {baseURL} from "@/constants";

interface IProps {
  form: UseFormReturn<ICreatePlanForm | IEditPlanForm>;
}

const CreateAndEditPlanForm = ({form}: IProps) => {
  const data = useModal().data as IPlanData;

  const url = data?.action?.edit_url || `${baseURL}/admin/plan-add`;

  const {data: coins} = useQuery({
    queryFn: () => apiGetPlansFormData(url),
    queryKey: ["admin-get-one-plan", url],
  });

  const getCoinsOptions = useMemo(() => {
    if (!coins) return [{value: "", label: "Select Coin", disabled: true}];

    const data = coins?.coins?.map((coin) => {
      return {
        value: coin.type,
        label: coin.type,
      };
    });

    return [{value: "", label: "Select Coin", disabled: true}, ...(data || [])];
  }, [coins]);

  const getBonusOptions = useMemo(() => {
    const data: {value: string; label: string; disabled?: boolean}[] = [
      {value: "", label: "Select Fees Type", disabled: true},
    ];

    for (const i in coins?.fees_types) {
      data.push({
        value: i,
        label: coins?.fees_types[i as keyof unknown],
      });
    }

    return data;
  }, [coins]);

  return (
    <FormProvider {...form}>
      <ModalBody>
        <div className='mb-1.25rem grid items-center gap-1.25rem md:grid-cols-2'>
          <div>
            <FileUploader name='image' title='Plan Image' locale />
          </div>
          <div>
            <Label htmlFor='plan-form-name'>Plan Name</Label>
            <Input
              type='text'
              {...form.register("plan_name")}
              placeholder='Enter Plan Name'
              id='plan-form-name'
              isError={!!form.formState.errors.plan_name}
            />
            <ErrorMessage>{form.formState.errors.plan_name?.message}</ErrorMessage>
          </div>
        </div>
        <div className='mb-1.25rem grid gap-1.25rem md:grid-cols-2'>
          <div>
            <Label htmlFor='plan-form-duration'>Plan Duration</Label>
            <Input
              type='text'
              {...form.register("duration")}
              placeholder='Enter Plan Duration'
              id='plan-form-duration'
              isError={!!form.formState.errors.duration}
            />
            <ErrorMessage>{form.formState.errors.duration?.message}</ErrorMessage>
          </div>
          <div>
            <Label htmlFor='plan-form-minimumAmount'>Plan Minimum Amount</Label>
            <Input
              type='text'
              {...form.register("amount")}
              placeholder='Enter Plan Minimum Amount'
              id='plan-form-minimumAmount'
              isError={!!form.formState.errors.amount}
            />
            <ErrorMessage>{form.formState.errors.amount?.message}</ErrorMessage>
          </div>
        </div>

        <div className='mb-1.25rem'>
          <Label htmlFor='plan-form-feesMethod'>Plan Fees Method</Label>
          <Select
            {...form.register("bonus_type")}
            options={getBonusOptions}
            id='plan-form-feesMethod'
            isError={!!form.formState.errors.bonus_type}
          />
          <ErrorMessage>{form.formState.errors.bonus_type?.message}</ErrorMessage>
        </div>

        <div className='mb-1.25rem grid gap-1.25rem md:grid-cols-2'>
          <div>
            <Label htmlFor='plan-form-bonusCoinType'>Plan bonus coin type</Label>
            <Select
              {...form.register("bonus_coin_type")}
              options={getCoinsOptions}
              id='plan-form-feesMethod'
              isError={!!form.formState.errors.bonus_coin_type}
            />
            <ErrorMessage>{form.formState.errors.bonus_coin_type?.message}</ErrorMessage>
          </div>

          <div>
            <Label htmlFor='plan-form-bonus'>Plan Bonus</Label>
            <Input
              type='text'
              {...form.register("bonus")}
              placeholder='Enter Plan Plan Bonus'
              id='plan-form-bonus'
              isError={!!form.formState.errors.bonus}
            />
            <ErrorMessage>{form.formState.errors.bonus?.message}</ErrorMessage>
          </div>
        </div>

        <div className='mb-1.25rem'>
          <Label htmlFor='plan-form-activationStatus'>Activation Status</Label>
          <Select
            {...form.register("status")}
            options={constantPlanActivationStatus}
            id='plan-form-activationStatus'
            isError={!!form.formState.errors.status}
          />
          <ErrorMessage>{form.formState.errors.status?.message}</ErrorMessage>
        </div>

        <div className='mb-1.25rem'>
          <Label htmlFor='plan-form-description'>Short Note</Label>
          <Textarea
            {...form.register("description")}
            id='plan-form-description'
            placeholder='Enter Short Note'
            isError={!!form.formState.errors.description}
          />
          <ErrorMessage>{form.formState.errors.description?.message}</ErrorMessage>
        </div>
      </ModalBody>
    </FormProvider>
  );
};

export default CreateAndEditPlanForm;
