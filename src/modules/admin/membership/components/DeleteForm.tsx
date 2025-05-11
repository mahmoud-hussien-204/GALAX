import ConfirmationForm from "@/components/ConfirmationForm";

import {IPlanData} from "../interfaces";

type IProps = Pick<IPlanData, "id">;

const DeleteForm = ({data: dataProps}: IModalComponentProps) => {
  const data = dataProps as IProps;

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <form noValidate name='delete-plan-form' id='delete-plan-form' onSubmit={handleSubmit}>
      <ConfirmationForm isLoading={false} message='Are you sure you want to delete this plan?' />
    </form>
  );
};

export default DeleteForm;
