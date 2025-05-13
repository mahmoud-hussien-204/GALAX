import ModalBody from "@/components/ModalBody";

import ModalHeader from "@/components/ModalHeader";

import {IBanner} from "../../interfaces";

import Status from "@/components/Status";

const ViewBannerForm = ({data: propsData}: IModalComponentProps) => {
  const data = propsData as IBanner;

  return (
    <div>
      <ModalHeader title='View Banner' />

      <ModalBody>
        <div className='mb-1.25rem flex flex-wrap justify-between gap-0.5rem'>
          <h5 className=''>{data?.title}</h5>
          <Status status={data?.status} />
        </div>
        <a href={data?.link} target='_blank' rel='noopener noreferrer'>
          <img
            src='{data?.image}'
            alt='Banner'
            className='h-[200px] w-full rounded-0.5rem bg-base-300'
          />
        </a>
      </ModalBody>
    </div>
  );
};

export default ViewBannerForm;
