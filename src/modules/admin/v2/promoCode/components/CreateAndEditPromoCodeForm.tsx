import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import Label from "@/components/Label";

import ModalBody from "@/components/ModalBody";

import {UseFormReturn} from "react-hook-form";

import {ICreatePromoCodesForm, IEditPromoCodesForm} from "../interfaces";

interface IProps {
  form: UseFormReturn<IEditPromoCodesForm | ICreatePromoCodesForm>;
  type: "create" | "edit";
}

const CreateAndEditPromoCodeForm = ({form}: IProps) => {
  return (
    <ModalBody>
      <div className='mb-1.25rem'>
        <Label htmlFor='create-promoCode-form-name'>Name</Label>
        <Input
          type='text'
          {...form.register("name")}
          placeholder='Enter Name'
          id='create-promoCode-form-name'
          isError={!!form.formState.errors.name}
        />
        <ErrorMessage>{form.formState.errors.name?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='create-promoCode-form-value'>Value</Label>
        <Input
          type='text'
          {...form.register("value")}
          placeholder='Enter Value'
          id='create-promoCode-form-value'
          isError={!!form.formState.errors.value}
        />
        <ErrorMessage>{form.formState.errors.value?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='create-promoCode-form-max_usage'>Usage Count</Label>
        <Input
          type='text'
          {...form.register("max_usage")}
          placeholder='Enter Usage Count'
          id='create-promoCode-form-max_usage'
          isError={!!form.formState.errors.max_usage}
        />
        <ErrorMessage>{form.formState.errors.max_usage?.message}</ErrorMessage>
      </div>
    </ModalBody>
  );
};

export default CreateAndEditPromoCodeForm;
