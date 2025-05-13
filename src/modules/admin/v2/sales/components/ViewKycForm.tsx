import Button from "@/components/Button";

import ModalBody from "@/components/ModalBody";

import ModalHeader from "@/components/ModalHeader";

import {
  IKycVerification,
  IKycVerificationDataGroupedFiles,
  IRejectKycVerificationForm,
} from "../interfaces";

import useQuery from "@/hooks/useQuery";

import {
  apiAcceptKycVerification,
  apiGetKycVerificationDetails,
  apiRejectKycVerification,
} from "../services";

import WithLoading from "@/components/WithLoading";

import IconCheck from "@/components/icons/IconCheck";

import IconClose from "@/components/icons/IconClose";

import {useState} from "react";

import {ModalWrapper} from "@/components/Modal";

import RejectKycForm from "./RejectKycForm";

import Title from "@/components/Title";

import dayjs from "dayjs";

import useMutation from "@/hooks/useMutation";

import useModal from "@/hooks/useModal";

const ViewKycForm = ({data: dataProps}: IModalComponentProps) => {
  const kycVerificationData = dataProps as IKycVerification;

  const {data, isLoading} = useQuery({
    queryFn: () => apiGetKycVerificationDetails(kycVerificationData.action.Details),
    queryKey: ["kyc-verification-details", kycVerificationData.id],
  });

  return (
    <>
      <ModalHeader title='Kyc Verification' />
      <ModalBody>
        <WithLoading isLoading={isLoading}>
          <div className=''>
            {data?.grouped_files &&
              Object.values(data?.grouped_files).map((item) => (
                <PendingItem data={item} key={item.type} />
              ))}
          </div>
        </WithLoading>
      </ModalBody>
    </>
  );
};

export default ViewKycForm;

const PendingItem = ({data}: {data: IKycVerificationDataGroupedFiles}) => {
  const {data: userData} = useModal();

  const [isReject, setIsReject] = useState<boolean>(false);

  const hideModal = () => {
    setIsReject(false);
  };

  const {
    mutate: mutateAccept,
    isPending: isPendingAccept,
    queryClient,
  } = useMutation({
    mutationFn: apiAcceptKycVerification,
  });

  const handleAccept = () => {
    mutateAccept(data.action.Accept, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["kyc-verification-details", "admin-get-kyc-list"],
        });
      },
    });
  };

  const {mutate: mutateReject, isPending: isPendingReject} = useMutation({
    mutationFn: (variables: IRejectKycVerificationForm) =>
      apiRejectKycVerification(data.action.Reject, variables),
  });

  const handleReject = (couse: string) => {
    mutateReject(
      {
        user_id: (userData as {id: number})?.id,
        type: data.type,
        couse: couse,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["kyc-verification-details", "admin-get-kyc-list"],
          });
          hideModal();
        },
      }
    );
  };

  return (
    <div className='rounded-btn p-1rem odd:bg-base-300'>
      <Title>
        <div className='flex items-center justify-between'>
          <span className='capitalize'>{data.type.replace(/_/g, " ")} Verification</span>
          <div className='flex items-center gap-1.25rem'>
            <Button
              type='button'
              className='btn-ghost h-auto !min-h-0 px-0 text-14 text-success hover:bg-transparent'
              onClick={handleAccept}
              isLoading={isPendingAccept}
              disabled={isPendingAccept || isPendingReject}
            >
              <IconCheck
                svgProps={{
                  className: "w-1rem h-1rem",
                }}
              />
              Accept
            </Button>
            <Button
              onClick={() => setIsReject(true)}
              type='button'
              className='btn-ghost h-auto !min-h-0 px-0 text-14 text-error hover:bg-transparent'
              disabled={isPendingAccept || isPendingReject}
            >
              <IconClose
                svgProps={{
                  className: "w-1rem",
                }}
              />
              Reject
            </Button>
          </div>
        </div>
      </Title>

      <div className='grid grid-cols-2 gap-1.25rem'>
        {data.files.map((file) => (
          <div key={file.id} className='flex flex-col rounded-btn bg-base-100 p-0.75rem'>
            <img
              src={file.photo}
              alt={file.field_name}
              className='h-full w-full rounded-btn object-cover'
            />
            <div className='mt-1rem flex items-center justify-between'>
              <h6 className='capitalize'>{file.field_name.replace(/_/g, " ")}</h6>
              <h6 className='capitalize'>{dayjs(file.created_at).format("DD MMM YYYY")}</h6>
            </div>
          </div>
        ))}
      </div>
      {isReject && (
        <ModalWrapper>
          <RejectKycForm isLoading={isPendingReject} hide={hideModal} handleSubmit={handleReject} />
        </ModalWrapper>
      )}
    </div>
  );
};
