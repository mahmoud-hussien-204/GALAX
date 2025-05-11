interface IProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
}

const FormCardTitle = ({subtitle, title}: IProps) => {
  return (
    <div>
      <h2 className='mb-0.5rem text-24 font-bold leading-1.875rem'>{title}</h2>
      <h5 className='text-balance text-neutral-content'>{subtitle}</h5>
    </div>
  );
};

export default FormCardTitle;
