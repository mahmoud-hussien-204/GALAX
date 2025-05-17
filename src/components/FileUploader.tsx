import IconImage from "./icons/IconImage";

import useFileUploader from "@/hooks/useFileUploader";

interface IProps {
  locale?: boolean;
  name: string;
  title: string;
  id?: string;
}

const FileUploader = ({locale = true, name, title, id = "file-uploader"}: IProps) => {
  const {handleFileChange, imageUrl} = useFileUploader({name, locale});
  return (
    <div className='w-full'>
      <input type='file' hidden id={id} onChange={handleFileChange} />
      <label
        htmlFor={id}
        className='block h-[200px] w-full cursor-pointer rounded-0.5rem bg-base-300'
      >
        {!imageUrl ? (
          <div className='flex h-full w-full flex-col items-center justify-center gap-1rem text-center'>
            <IconImage />
            <div>
              <h5 className='mb-0.25rem capitalize'>{title}</h5>
              <h6 className='text-14 text-neutral-600'>Upload</h6>
            </div>
          </div>
        ) : (
          <img src={imageUrl} className='rounded-inherit h-full w-full object-cover' />
        )}
      </label>
    </div>
  );
};

export default FileUploader;

export const FileUploaderStyle2 = ({locale = true, name, title, id = "file-uploader"}: IProps) => {
  const {handleFileChange, imageUrl} = useFileUploader({name, locale});

  return (
    <div className='w-full'>
      <input type='file' hidden id={id} onChange={handleFileChange} />
      <label htmlFor={id} className='flex cursor-pointer items-center gap-0.75rem'>
        <div className='flex h-4.5rem w-4.5rem items-center justify-center rounded-box bg-base-300'>
          {!imageUrl ? (
            <IconImage />
          ) : (
            <img src={imageUrl} className='rounded-inherit h-full w-full object-cover' />
          )}
        </div>
        <div>
          <h5 className='mb-0.25rem capitalize'>{title}</h5>
          <h6 className='text-14 text-neutral-600'>Upload</h6>
        </div>
      </label>
    </div>
  );
};
