import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import Label from "@/components/Label";

import ModalBody from "@/components/ModalBody";

import {UseFormReturn} from "react-hook-form";

import {ICreateGarageForm, IEditGarageForm} from "../../interfaces";

import Select from "@/components/Select";

import {constantGarageStatus} from "../../constants";

import {FileUploaderStyle2} from "@/components/FileUploader";

import Textarea from "@/components/Textarea";

import DateInput from "@/components/DateInput";

import dayjs from "dayjs";

interface IProps {
  form: UseFormReturn<ICreateGarageForm | IEditGarageForm>;
  type: "create" | "edit";
}

const CreateAndEditGarageForm = ({form}: IProps) => {
  const expiresAtField = form.watch("expires_at");

  const expiresAtValue = expiresAtField ? dayjs(expiresAtField).toDate() : undefined;

  const expiresAtMinValue = dayjs().add(1, "day").toDate();

  return (
    <ModalBody>
      <div className='mb-1.25rem'>
        <Label htmlFor='create-garage-form-logo'>Garage Logo</Label>
        <FileUploaderStyle2 name='garage_logo' title='Upload garage logo' />
        <ErrorMessage>{form.formState.errors.garage_logo?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='create-garage-form-garage_name'>Garage Name</Label>
        <Input
          type='text'
          {...form.register("garage_name")}
          placeholder='Enter Garage Name'
          id='create-garage-form-garage_name'
          isError={!!form.formState.errors.garage_name}
        />
        <ErrorMessage>{form.formState.errors.garage_name?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='create-garage-form-garage_email'>Garage Email</Label>
        <Input
          type='email'
          {...form.register("garage_email")}
          placeholder='Enter Garage Name'
          id='create-garage-form-garage_email'
          isError={!!form.formState.errors.garage_email}
        />
        <ErrorMessage>{form.formState.errors.garage_email?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='create-garage-form-garage_phone'>Garage Phone</Label>
        <Input
          type='text'
          {...form.register("garage_phone")}
          placeholder='Enter Garage Phone'
          id='create-garage-form-garage_phone'
          isError={!!form.formState.errors.garage_phone}
        />
        <ErrorMessage>{form.formState.errors.garage_phone?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='create-garage-form-garage_mobile'>Garage Mobile</Label>
        <Input
          type='text'
          {...form.register("garage_mobile")}
          placeholder='Enter Garage Mobile'
          id='create-garage-form-garage_mobile'
          isError={!!form.formState.errors.garage_mobile}
        />
        <ErrorMessage>{form.formState.errors.garage_mobile?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='create-garage-form-garage_whatsapp'>Garage Whatsapp</Label>
        <Input
          type='text'
          {...form.register("garage_whatsapp")}
          placeholder='Enter Garage Whatsapp'
          id='create-garage-form-garage_whatsapp'
          isError={!!form.formState.errors.garage_whatsapp}
        />
        <ErrorMessage>{form.formState.errors.garage_whatsapp?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='create-garage-form-garage_address'>Garage Address</Label>
        <Input
          type='text'
          {...form.register("garage_address")}
          placeholder='Enter Garage Address'
          id='create-garage-form-garage_address'
          isError={!!form.formState.errors.garage_address}
        />
        <ErrorMessage>{form.formState.errors.garage_address?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='create-garage-form-garage_city'>Garage City</Label>
        <Input
          type='text'
          {...form.register("garage_city")}
          placeholder='Enter Garage City'
          id='create-garage-form-garage_city'
          isError={!!form.formState.errors.garage_city}
        />
        <ErrorMessage>{form.formState.errors.garage_city?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='create-garage-form-garage_description'>Garage Description</Label>
        <Textarea
          {...form.register("garage_description")}
          placeholder='Enter Garage Description'
          id='create-garage-form-garage_description'
          isError={!!form.formState.errors.garage_description}
        />
        <ErrorMessage>{form.formState.errors.garage_description?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem grid grid-cols-2 gap-1.25rem'>
        <div>
          <Label htmlFor='create-garage-form-garage_latitude'>Garage Latitude</Label>
          <Input
            type='text'
            {...form.register("garage_latitude")}
            placeholder='Enter Garage Latitude'
            id='create-garage-form-garage_latitude'
            isError={!!form.formState.errors.garage_latitude}
          />
          <ErrorMessage>{form.formState.errors.garage_latitude?.message}</ErrorMessage>
        </div>
        <div>
          <Label htmlFor='create-garage-form-garage_longitude'>Garage Longitude</Label>
          <Input
            type='text'
            {...form.register("garage_longitude")}
            placeholder='Enter Garage Longitude'
            id='create-garage-form-garage_longitude'
            isError={!!form.formState.errors.garage_longitude}
          />
          <ErrorMessage>{form.formState.errors.garage_longitude?.message}</ErrorMessage>
        </div>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='create-garage-form-expires_at'>Expires At</Label>
        <DateInput
          name='expires_at'
          onChange={(value) => {
            if (!value) return;
            form.setValue("expires_at", dayjs(value).format("YYYY-MM-DD"), {
              shouldValidate: true,
              shouldDirty: true,
            });
          }}
          selected={expiresAtValue}
          minDate={expiresAtMinValue}
          placeholderText='Expires At'
        />
        <ErrorMessage>{form.formState.errors.expires_at?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='create-garage-form-status'>Status</Label>
        <Select
          {...form.register("status")}
          options={constantGarageStatus}
          id='create-garage-form-status'
          isError={!!form.formState.errors.status}
        />
        <ErrorMessage>{form.formState.errors.status?.message}</ErrorMessage>
      </div>
    </ModalBody>
  );
};

export default CreateAndEditGarageForm;
