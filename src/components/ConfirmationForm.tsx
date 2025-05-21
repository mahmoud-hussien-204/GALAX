import IconWarning from "./icons/IconWarning";

import ModalBody from "./ModalBody";

import ModalFooter from "./ModalFooter";

import ModalHeader from "./ModalHeader";

interface IProps {
  message: string;
  subTitle?: string;
  submitButtonTitle?: string;
  isLoading: boolean;
}

const ConfirmationForm = ({
  isLoading,
  message,
  subTitle,
  submitButtonTitle = "Yes, Confirm",
}: IProps) => {
  return (
    <>
      <ModalHeader title='Confirmation' />
      <ModalBody>
        <div className='flex items-center gap-1rem text-primary'>
          <IconWarning />
          <div>
            <h5 className='mb-0.5rem text-18 text-base-content'>{message}</h5>
            <h6 className='text-14 text-neutral'>
              {subTitle || "Lorem ipsum dolor, sit amet consectetur adipisicing elit."}
            </h6>
          </div>
        </div>
      </ModalBody>
      <ModalFooter isLoading={isLoading} disabled={isLoading} title={submitButtonTitle} />
    </>
  );
};

export default ConfirmationForm;
