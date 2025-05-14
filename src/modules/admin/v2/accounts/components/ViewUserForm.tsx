import Button from "@/components/Button";

import ModalBody from "@/components/ModalBody";

import ModalFooter from "@/components/ModalFooter";

import ModalHeader from "@/components/ModalHeader";

import { IUserData } from "../interfaces";

import Status from "@/components/Status";

import dayjs from "dayjs";

const ViewUserForm = ({ hide, data }: IModalComponentProps) => {
  const userData = data as IUserData;

  return (
    <div>
      <ModalHeader title='View User' />
      <ModalBody>
        <div className='flex gap-1rem'>
          <span className="p-1 rounded-full bg-white">
            <img
              src={userData.photo ? userData.photo : '/user-avater.png'}
              alt={userData.first_name + " " + userData.last_name}
              className='object-fill w-9rem h-9rem rounded-full'
            />
          </span>

          <div className='flex-1'>
            <div className='flex justify-between'>
              <div>
                <h3 className='mb-0.25rem text-18 capitalize'>
                  {userData.first_name} {userData.last_name}
                  <mark className='ms-0.5rem rounded-full bg-primary px-0.5rem text-14'>
                    {userData.role == 1 ? "Admin" : "User"}
                  </mark>
                </h3>
                <h6 className='text-neutral-400'>{userData.email}</h6>
              </div>
              <Status status={userData.status} />
            </div>
            <h6 className='mb-0.25rem mt-1.25rem text-neutral-400'>
              Phone number: <span className='text-white'>{userData.phone}</span>
            </h6>
            <h6 className='text-neutral-400'>
              Created at:{" "}
              <span className='text-white'>
                {dayjs(userData.created_at).format("MMMM D, YYYY h:mm A")}
              </span>
            </h6>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          type='button'
          className='btn-ghost text-neutral-400 hover:bg-transparent hover:text-white'
          onClick={hide}
        >
          Cancel
        </Button>
      </ModalFooter>
    </div>
  );
};

export default ViewUserForm;
