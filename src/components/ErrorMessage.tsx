interface IProps {
  children: React.ReactNode;
}

const ErrorMessage = ({children}: IProps) => {
  return children && <span className='mt-0.25rem block text-12 text-error'>{children}</span>;
};

export default ErrorMessage;
