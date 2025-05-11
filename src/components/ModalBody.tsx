import React from "react";

interface IProps {
  children: React.ReactNode;
}

const ModalBody = ({children}: IProps) => {
  return <div className='py-1rem'>{children}</div>;
};

export default ModalBody;
