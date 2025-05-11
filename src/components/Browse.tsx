import IconLink from "./icons/IconLink";

const Browse = () => {
  return (
    <a
      href='https://github.com/sgt-protocol'
      target='_blank'
      rel='noreferrer'
      className='flex items-center gap-0.62rem text-14 font-semibold text-neutral-500'
    >
      <IconLink />
      Browse
    </a>
  );
};

export default Browse;
