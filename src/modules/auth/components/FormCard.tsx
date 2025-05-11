interface IProps {
  children: React.ReactNode;
}

const FormCard = ({children}: IProps) => {
  return <div className='w-full max-w-[35rem]'>{children}</div>;
};

export default FormCard;
