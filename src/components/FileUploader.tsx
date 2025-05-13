import {useState, useEffect} from "react";

import {useFormContext} from "react-hook-form";

import IconImage from "./icons/IconImage";

interface IProps {
  locale?: boolean;
  name: string;
  title: string;
}

const FileUploader = ({locale = true, name, title}: IProps) => {
  const {setValue, watch} = useFormContext();

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const fieldValue = watch(name);

  // Manage image URL creation and cleanup
  useEffect(() => {
    if (typeof fieldValue === "object" && fieldValue !== null) {
      const url = window.URL.createObjectURL(fieldValue);
      setImageUrl(url);
      return () => {
        window.URL.revokeObjectURL(url);
      };
    } else {
      setImageUrl(fieldValue);
    }
  }, [fieldValue]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (locale) {
      setValue(name, file, {shouldValidate: true, shouldDirty: true, shouldTouch: true});
    } else {
      // TODO: Upload the file to the server and set the returned URL in the form
    }
  };

  return (
    <div className='w-full'>
      <input type='file' hidden id='file-uploader' onChange={handleFileChange} />
      <label
        htmlFor='file-uploader'
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
