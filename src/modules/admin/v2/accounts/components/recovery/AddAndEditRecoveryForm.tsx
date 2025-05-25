import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import Label from "@/components/Label";

import ModalBody from "@/components/ModalBody";

import {UseFormReturn} from "react-hook-form";

import {IRecoveryListing} from "../../interfaces";

import FileUploader from "@/components/FileUploader";

import RadioBoxInput from "@/components/RadioBoxInput";

import {EnumGarageStatus} from "../../enums";

import Textarea from "@/components/Textarea";
import DateInput from "@/components/DateInput";
import dayjs from "dayjs";

interface IProps {
  form: UseFormReturn<IRecoveryListing>;
}

const AddAndEditRecoveryForm = ({form}: IProps) => {
  const expiresAtField = form.watch("expires_at");

  const expiresAtValue = expiresAtField ? dayjs(expiresAtField).toDate() : undefined;

  const expiresAtMinValue = dayjs().add(1, "day").toDate();

  return (
    <ModalBody>
      <div className='mb-1.25rem grid gap-1.25rem sm:grid-cols-2'>
        <FileUploader name='service_logo' locale title='Upload Service Logo' />

        <div className='space-y-1.25rem'>
          <div>
            <Label htmlFor='recovery-form-service-name'>Service Name</Label>
            <Input
              {...form.register("service_name")}
              placeholder='Enter Service Name'
              id='recovery-form-service-name'
              isError={!!form.formState.errors.service_name}
            />
            <ErrorMessage>{form.formState.errors.service_name?.message}</ErrorMessage>
          </div>

          <div>
            <Label htmlFor='recovery-form-service-email'>Service Email</Label>
            <Input
              type='email'
              {...form.register("service_email")}
              placeholder='Enter service Email'
              id='recovery-form-service-email'
              isError={!!form.formState.errors.service_email}
            />
            <ErrorMessage>{form.formState.errors.service_email?.message}</ErrorMessage>
          </div>
        </div>
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='recovery-form-service-whatsapp'>Service Whatsapp</Label>
        <Input
          type='tel'
          {...form.register("service_whatsapp")}
          placeholder='Enter phone number'
          id='recovery-form-service-whatsapp'
          isError={!!form.formState.errors.service_whatsapp}
        />
        <ErrorMessage>{form.formState.errors.service_whatsapp?.message}</ErrorMessage>
      </div>

      <div className='mb-1.25rem grid gap-1.25rem sm:grid-cols-2'>
        <div>
          <Label htmlFor='recovery-form-service-mobile'>Service Mobile</Label>
          <Input
            type='tel'
            {...form.register("service_mobile")}
            placeholder='Enter Service Mobile'
            id='recovery-form-service-mobile'
            isError={!!form.formState.errors.service_mobile}
          />
          <ErrorMessage>{form.formState.errors.service_mobile?.message}</ErrorMessage>
        </div>

        <div>
          <Label htmlFor='recovery-form-service-phone'>Phone Number</Label>
          <Input
            type='tel'
            {...form.register("service_phone")}
            placeholder='Enter phone number'
            id='recovery-form-service-phone'
            isError={!!form.formState.errors.service_phone}
          />
          <ErrorMessage>{form.formState.errors.service_phone?.message}</ErrorMessage>
        </div>
      </div>

      <div className='mb-1.25rem grid gap-1.25rem sm:grid-cols-2'>
        <div>
          <Label htmlFor='recovery-form-service-address'>Service Address</Label>
          <Input
            {...form.register("service_address")}
            placeholder='Enter Service Address'
            id='recovery-form-service-address'
            isError={!!form.formState.errors.service_address}
          />
          <ErrorMessage>{form.formState.errors.service_address?.message}</ErrorMessage>
        </div>

        <div>
          <Label htmlFor='recovery-form-service-city'>Service City</Label>
          <Input
            {...form.register("service_city")}
            placeholder='Enter Service City'
            id='recovery-form-service-city'
            isError={!!form.formState.errors.service_city}
          />
          <ErrorMessage>{form.formState.errors.service_city?.message}</ErrorMessage>
        </div>
      </div>

      <div className='mb-1.25rem grid gap-1.25rem sm:grid-cols-2'>
        <div>
          <Label htmlFor='recovery-form-service-longitude'>Service longitude</Label>
          <Input
            {...form.register("service_longitude")}
            placeholder='Enter Service longitude'
            id='recovery-form-service-longitude'
            isError={!!form.formState.errors.service_longitude}
          />
          <ErrorMessage>{form.formState.errors.service_longitude?.message}</ErrorMessage>
        </div>

        <div>
          <Label htmlFor='recovery-form-service-latitude'>Service latitude</Label>
          <Input
            {...form.register("service_latitude")}
            placeholder='Enter Service latitude'
            id='recovery-form-service-latitude'
            isError={!!form.formState.errors.service_latitude}
          />
          <ErrorMessage>{form.formState.errors.service_latitude?.message}</ErrorMessage>
        </div>
      </div>

      <div className='mb-1.25rem grid gap-1.25rem sm:grid-cols-2'>
        <div className='space-y-2'>
          <Label htmlFor='user-form-role'>Status</Label>
          <div className='flex items-center gap-4'>
            <RadioBoxInput
              {...form.register("status")}
              label='Active'
              value={EnumGarageStatus.SHOW}
            />
            <RadioBoxInput
              {...form.register("status")}
              label='Inactive'
              value={EnumGarageStatus.HIDE}
            />
          </div>
          <ErrorMessage>{form.formState.errors.status?.message}</ErrorMessage>
        </div>
        <div className=''>
          <Label htmlFor='recovery-form-expire-date'>Expire Date</Label>

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
      </div>

      <div className='mb-1.25rem'>
        <Label htmlFor='recovery-form-description'>Description</Label>
        <Textarea
          {...form.register("service_description")}
          placeholder='Enter Description'
          id='recovery-form-description'
          isError={!!form.formState.errors.service_description}
        />
        <ErrorMessage>{form.formState.errors.service_description?.message}</ErrorMessage>
      </div>
    </ModalBody>
  );
};

export default AddAndEditRecoveryForm;
