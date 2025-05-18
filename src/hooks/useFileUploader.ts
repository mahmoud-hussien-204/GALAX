import {useEffect, useState} from "react";

import {useFormContext} from "react-hook-form";

interface IProps {
  locale?: boolean;
  name: string;
}

const useFileUploader = ({name, locale}: IProps) => {
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

  return {
    handleFileChange,
    imageUrl,
  };
};

export default useFileUploader;
