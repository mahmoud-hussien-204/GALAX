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
          <div className='flex gap-0.5rem'>
            <img
              src={data?.garage_logo}
              alt='Garage'
              className='size-4.5rem rounded-0.5rem bg-base-300'
            />
            <div>
              <h5 className='mb-0.25rem font-bold'>{data?.garage_name}</h5>
              <h5 className='mb-0.5rem text-14'>{data?.garage_email}</h5>
              <Status status={data?.status} />
            </div>
          </div>
        </div>

        <p className='mb-1.25rem rounded bg-base-200 p-0.75rem'>{data.garage_description}</p>

        <h5 className='mb-0.5rem flex justify-between'>
          <span>
            Address:&nbsp;&nbsp;
            <strong>
              {data?.garage_address}, {data?.garage_city}
            </strong>
          </span>
          <span>
            latitude: <strong>{data.garage_latitude}</strong>
          </span>
          <span>
            longitude: <strong>{data.garage_longitude}</strong>
          </span>
        </h5>

        <h5 className='flex flex-wrap justify-between gap-0.5rem'>
          <span>
            Phone: <strong>{data?.garage_phone}</strong>
          </span>
          <span>
            Mobile: <strong>{data?.garage_mobile}</strong>
          </span>
          <span>
            Whatsapp: <strong>{data?.garage_mobile}</strong>
          </span>
        </h5>
      </ModalBody>
    </div>
  );
};

export default ViewGarageForm;
