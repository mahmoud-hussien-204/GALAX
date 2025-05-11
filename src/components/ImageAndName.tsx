interface IProps {
  image: string;
  name: string;
}

const ImageAndName = ({image, name}: IProps) => {
  return (
    <div className='flex items-center gap-0.75rem'>
      <img src={image} alt={name} className='h-2.5rem w-2.5rem rounded-full' />
      <h6 className='text-14 font-semibold text-neutral-1100'>{name}</h6>
    </div>
  );
};

export default ImageAndName;
