import useModal from "@/hooks/useModal";

import Button from "./Button";
import AppHelper from "@/helpers/appHelper";

interface IPropsBase {
  isLoading?: boolean;
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

interface IPropsWithChildren extends IPropsBase {
  children: React.ReactNode;
  isLoading?: boolean;
  title?: string;
}

// If children are not provided, isLoading and title are required
interface IPropsWithoutChildren extends IPropsBase {
  children?: undefined;
  isLoading: boolean;
  title: string;
}

type Props = IPropsWithChildren | IPropsWithoutChildren;

const ModalFooter = (props: Props) => {
  const {hide} = useModal();

  return (
    <div className={AppHelper.classes("mt-1rem flex items-center gap-1rem", props.className)}>
      {props?.children ? (
        props.children
      ) : (
        <>
          <Button
            disabled={props.isLoading}
            type='button'
            className='btn-ghost flex-1 text-neutral hover:bg-transparent hover:text-base-content'
            onClick={hide}
          >
            Cancel
          </Button>
          <Button type='submit' className='min-w-[100px] flex-1' isLoading={props.isLoading}>
            {props.title}
          </Button>
        </>
      )}
    </div>
  );
};

export default ModalFooter;
