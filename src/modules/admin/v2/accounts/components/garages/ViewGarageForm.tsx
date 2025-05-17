import ModalBody from "@/components/ModalBody";

import ModalHeader from "@/components/ModalHeader";

import {IGarage} from "../../interfaces";

import Status from "@/components/Status";

const ViewGarageForm = ({data: propsData}: IModalComponentProps) => {
  const data = propsData as IGarage;

  return (
    <div>
      <ModalHeader title='View Garage' />

      <ModalBody>
        <div className='mb-1.25rem flex flex-wrap justify-between gap-0.5rem'>
          <div className='flex items-center gap-0.5rem'>
            <img
              src={data?.garage_logo}
              alt='Garage'
              className='size-4.5rem rounded-0.5rem bg-base-300'
            />
            <div>
              <h5 className='mb-0.25rem'>{data?.garage_name}</h5>
              <h5 className='text-14'>{data?.garage_email}</h5>
            </div>
          </div>
          <Status status={data?.status} />
        </div>

        <h5 className='mb-1.25rem'>
          Address: {data?.garage_address}, {data?.garage_city}, latitude: {data.garage_latitude},
          longitude: {data.garage_longitude}
        </h5>

        <div className='mb-1.25rem flex flex-wrap justify-between gap-0.5rem'>
          <h5>Phone: {data?.garage_phone}</h5>
          <h5>Mobile: {data?.garage_mobile}</h5>
          <h5>Whatsapp: {data?.garage_mobile}</h5>
        </div>

        <p className='mb-1.25rem'>{data.garage_description}</p>
      </ModalBody>
    </div>
  );
};

export default ViewGarageForm;
