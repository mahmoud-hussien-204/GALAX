import IconPen from "@/components/icons/IconPen";
import useMutation from "@/hooks/useMutation";

import useAuth from "@/modules/auth/hooks/useAuth";
import { apiUploadProfilePhoto } from "../services";

function ChangeUserImage() {
  const { userData, saveUser } = useAuth();

  const { mutate } = useMutation({
    mutationFn: apiUploadProfilePhoto,
    mutationKey: ["upload-profile-image"],
  });

  const handelUploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file_one", file);

    mutate(formData, {
      onSuccess: (data) => {
        if (!userData) return
        const user = { ...userData };
        user.photo = data.data.image;
        saveUser(user);
      },
    });
  };
  return (
    <div className='flex flex-col gap-4'>
      <div className='relative'>
        <img src={userData?.photo} alt='' className='w-6rem rounded-full' />

        <input
          type='file'
          id='edit-profile-form-photo'
          className='absolute left-0 top-0 h-full w-full cursor-pointer rounded-full opacity-0'
          onChange={handelUploadPhoto}
        />
        <label
          className='absolute bottom-0 right-0 flex h-2rem w-2rem cursor-pointer items-center justify-center rounded-full bg-primary text-base-100'
          htmlFor='edit-profile-form-photo'
        >
          <IconPen />
        </label>
      </div>
    </div>
  );
}

export default ChangeUserImage;
