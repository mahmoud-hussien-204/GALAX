import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import Label from "@/components/Label";

import ModalBody from "@/components/ModalBody";

import {UseFormReturn} from "react-hook-form";

import {IFAQForm, IEditFAQForm} from "../interfaces";

import Select from "@/components/Select";

import {constantStatusOptions} from "@/constants";

import Textarea from "@/components/Textarea";

interface IProps {
  form: UseFormReturn<IFAQForm | IEditFAQForm>;
}

const AddAndEditFAQForm = ({form}: IProps) => {
  return (
    <ModalBody>
      <div className='mb-1.25rem'>
        <Label htmlFor='faq-form-question'>Question</Label>
        <Input
          type='text'
          {...form.register("question")}
          placeholder='Enter Question'
          id='faq-form-question'
          isError={!!form.formState.errors.question}
        />
        <ErrorMessage>{form.formState.errors.question?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='faq-form-status'>Status</Label>
        <Select
          {...form.register("status")}
          options={constantStatusOptions}
          id='faq-form-status'
          isError={!!form.formState.errors.status}
        />
        <ErrorMessage>{form.formState.errors.status?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='faq-form-answer'>Answer</Label>
        <Textarea
          {...form.register("answer")}
          placeholder='Enter Answer'
          id='faq-form-answer'
          isError={!!form.formState.errors.answer}
        />
        <ErrorMessage>{form.formState.errors.answer?.message}</ErrorMessage>
      </div>
    </ModalBody>
  );
};

export default AddAndEditFAQForm;
