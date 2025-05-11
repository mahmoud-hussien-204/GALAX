interface IProps {
  children: React.ReactNode;
}

const Title = ({children}: IProps) => {
  return (
    <div className='mb-1rem'>
      <h2 className='text-18 text-neutral-300'>{children}</h2>
    </div>
  );
};

export default Title;
