import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import Label from "@/components/Label";

import ModalBody from "@/components/ModalBody";

import {UseFormReturn} from "react-hook-form";

import {ICreateBannerForm} from "../interfaces";

import Select from "@/components/Select";

import {constantBannerStatus} from "../constants";

import FileUploader from "@/components/FileUploader";

interface IProps {
  form: UseFormReturn<ICreateBannerForm>;
  type: "create" | "edit";
}

const CreateAndEditBannerForm = ({form}: IProps) => {
  return (
    <ModalBody>
      <div className='mb-1.25rem'>
        <Label htmlFor='create-banner-form-title'>Image</Label>
        <FileUploader name='image' title='Upload Banner Image' />
        <ErrorMessage>{form.formState.errors.image?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='create-banner-form-title'>Title</Label>
        <Input
          type='text'
          {...form.register("title")}
          placeholder='Enter Title'
          id='create-banner-form-title'
          isError={!!form.formState.errors.title}
        />
        <ErrorMessage>{form.formState.errors.title?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='create-banner-form-link'>Link</Label>
        <Input
          type='url'
          {...form.register("link")}
          placeholder='Enter Link'
          id='create-banner-form-link'
          isError={!!form.formState.errors.link}
        />
        <ErrorMessage>{form.formState.errors.link?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='create-banner-form-status'>Status</Label>
        <Select
          {...form.register("status")}
          options={constantBannerStatus}
          id='create-banner-form-status'
          isError={!!form.formState.errors.status}
        />
        <ErrorMessage>{form.formState.errors.status?.message}</ErrorMessage>
      </div>
    </ModalBody>
  );
};

export default CreateAndEditBannerForm;
