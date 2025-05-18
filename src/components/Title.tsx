interface IProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

const Title = ({children, isLoading}: IProps) => {
  return (
    <div className='mb-1rem'>
      <h2 className='text-18 text-neutral'>
        {isLoading && <span className='loading loading-spinner loading-xs'></span>}&nbsp;{children}
      </h2>
    </div>
  );
};

export default Title;
