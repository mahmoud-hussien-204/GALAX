import Button from "@/components/Button";

import Label from "@/components/Label";

import ModalBody from "@/components/ModalBody";

import ModalHeader from "@/components/ModalHeader";

import Textarea from "@/components/Textarea";

import {useRef} from "react";

const RejectKycForm = ({
  hide,
  handleSubmit,
  isLoading,
}: {
  hide: () => void;
  handleSubmit: (cause: string) => void;
  isLoading: boolean;
}) => {
  const causeRef = useRef<HTMLTextAreaElement>(null);

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(causeRef.current?.value as string);
      }}
    >
      <ModalHeader isCloseBtn={false} title='Reject Confirmation' />
      <ModalBody>
        <Label>Cause of Rejection</Label>
        <Textarea placeholder='Enter cause' name='couse' id='couse' ref={causeRef} />
      </ModalBody>

      <div className='flex items-center justify-end gap-1.25rem'>
        <Button
          disabled={isLoading}
          type='button'
          className='btn-ghost text-neutral-400 hover:bg-transparent hover:text-white'
          onClick={hide}
        >
          Cancel
        </Button>

        <Button type='submit' className='min-w-[100px]' isLoading={isLoading}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default RejectKycForm;
