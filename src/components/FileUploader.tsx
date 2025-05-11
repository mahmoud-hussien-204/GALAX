import {useMemo} from "react";
import {useFormContext} from "react-hook-form";
import IconImage from "./icons/IconImage";

interface IProps {
  locale?: boolean;
  name: string;
  title: string;
}

const FileUploader = ({locale = false, name, title}: IProps) => {
  const {setValue, watch} = useFormContext();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // if locale that means the data will sent as form data
    if (locale) {
      setValue(name, file);
    } else {
      // if not locale that means the file will upload to server and returned url
    }
  };

  const fieldValue = watch(name);

  const imageFieldValue = useMemo(() => {
    if (!fieldValue) return null;
    else if (typeof fieldValue === "object") return window.URL.createObjectURL(fieldValue);
    return fieldValue;
  }, [fieldValue]);

  return (
    <div className='w-full'>
      <input type='file' hidden id='file-uploader' onChange={handleFileChange} />
      <label htmlFor='file-uploader' className='flex cursor-pointer items-center gap-0.75rem'>
        <div className='flex h-4.5rem w-4.5rem items-center justify-center rounded-box bg-base-300'>
          {!imageFieldValue ? (
            <IconImage />
          ) : (
            <img src={imageFieldValue} className='rounded-inherit h-full w-full object-cover' />
          )}
        </div>
        <div>
          <h5 className='mb-0.25rem capitalize'>{title}</h5>
          <h6 className='text-14 text-neutral-400'>Upload</h6>
        </div>
      </label>
    </div>
  );
};

export default FileUploader;
