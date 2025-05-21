import ModalBody from "@/components/ModalBody";
import ModalHeader from "@/components/ModalHeader";
import {IRecoveryListing} from "../../interfaces";
import Status from "@/components/Status";
import dayjs from "dayjs";
import ModalFooter from "@/components/ModalFooter";
import Button from "@/components/Button";

function ViewRecoveryDetails({data, hide}: IModalComponentProps) {
  const service = data as IRecoveryListing;
  return (
    <>
      <ModalHeader title='Service Details' />
      <ModalBody>
        <div className='space-y-3'>
          {service.service_logo && (
            <img
              src={service.service_logo as unknown as string}
              alt={service.service_name}
              className='h-40 w-40 rounded-xl object-cover'
            />
          )}
          <span className='grid grid-cols-[auto_3fr] gap-3 [&>p:empty]:hidden'>
            <h6 className='font-semibold'>Service Name:</h6>
            <p className=''>{service.service_name}</p>

            <h6 className='font-semibold'>Service Email:</h6>
            <p className=''>{service.service_email}</p>

            <h6 className='font-semibold'>Service Phone:</h6>
            <p className=''>{service.service_phone}</p>

            <h6 className='font-semibold'>Service Mobile:</h6>
            <p className=''>{service.service_mobile}</p>

            <h6 className='font-semibold'>Service Whatsapp:</h6>
            <p className=''>{service.service_whatsapp}</p>

            <h6 className='font-semibold'>Service Address:</h6>
            <p className=''>{service.service_address}</p>

            <h6 className='font-semibold'>Service City:</h6>
            <p className=''>{service.service_city}</p>

            <h6 className='font-semibold'>Service Status:</h6>
            <p className=''>
              <Status status={service.status} />
            </p>

            {service.expires_at && (
              <>
                <h6 className='font-semibold'>Service Expire Date:</h6>
                <p className=''>{dayjs(service.expires_at).format("MMMM D, YYYY h:mm A")}</p>
              </>
            )}

            {service.service_longitude && (
              <>
                <h6 className='font-semibold'>Service Longitude:</h6>
                <p className=''>{service.service_longitude}</p>
              </>
            )}

            {service.service_latitude && (
              <>
                <h6 className='font-semibold'>Service Latitude:</h6>
                <p className=''>{service.service_latitude}</p>
              </>
            )}

            {service.service_description && (
              <>
                <h6 className='font-semibold'>Service Description:</h6>
                <p className=''>{service.service_description}</p>
              </>
            )}
          </span>
        </div>
      </ModalBody>
      <ModalFooter className='border-t pt-3'>
        <Button
          type='button'
          className='btn-destroy ms-auto max-w-[200px] flex-1 text-white hover:bg-transparent hover:text-base-content'
          onClick={hide}
        >
          Close
        </Button>
      </ModalFooter>
    </>
  );
}

export default ViewRecoveryDetails;
