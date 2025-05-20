import DatePicker, {DatePickerProps} from "react-datepicker";

import {forwardRef} from "react";

import Label from "./Label";

import IconCalender from "./icons/IconCalender";

import Input from "./Input";

const DateInput = forwardRef(({...props}: DatePickerProps, ref: React.ForwardedRef<DatePicker>) => {
  return (
    <DatePicker wrapperClassName='w-full' customInput={<CustomInput />} {...props} ref={ref} />
  );
});

export default DateInput;

const CustomInput = forwardRef<
  HTMLDivElement,
  {placeholder?: string; value?: string; onClick?: () => void}
>(({value, onClick, placeholder}, ref) => {
  return (
    <div ref={ref} className='relative w-full' onClick={onClick}>
      <Input placeholder={placeholder} readOnly value={value} className='pointer-events-none' />
      <Label className='absolute end-1rem top-1/2 !m-0 -translate-y-1/2 cursor-pointer'>
        <IconCalender />
      </Label>
    </div>
  );
});
