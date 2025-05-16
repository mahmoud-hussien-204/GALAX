import AppHelper from "@/helpers/appHelper";

import useModal from "@/hooks/useModal";

import Dropdown, {DropdownMenu} from "./Dropdown";

import Dots from "./Dots";

import {EnumModals} from "@/enums";

import IconSell from "./icons/IconSell";

import IconBuy from "./icons/IconBuy";

import IconSendReceive from "./icons/IconSendReceive";

import IconPrimary from "./icons/IconPrimary";

import IconEdit from "./icons/IconEdit";

import IconEye from "./icons/IconEye";

import IconTrash from "./icons/IconTrash";

import IconLock from "./icons/IconLock";

import IconClose from "./icons/IconClose";

import IconCheck from "./icons/IconCheck";

import {Link} from "react-router-dom";

const confirmationModalWidth = "max-w-[30rem]";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const TableBoxedLayoutContainer = ({children, className}: IProps) => {
  return (
    <div className='min-h-[55dvh] overflow-x-auto overflow-y-hidden'>
      <table className={AppHelper.classes("w-full min-w-min align-middle", className)}>
        {children}
      </table>
    </div>
  );
};

export const TableBoxedLayoutTHead = ({children, className}: IProps) => {
  return <thead className={className}>{children}</thead>;
};

export const TableBoxedLayoutTBody = ({children, className}: IProps) => {
  return <tbody className={className}>{children}</tbody>;
};

export const TableBoxedLayoutTR = ({children}: IProps) => {
  return <tr className='only:!bg-transparent odd:bg-base-200'>{children}</tr>;
};

export const TableBoxedLayoutTH = ({children, className}: IProps) => {
  return (
    <th
      className={AppHelper.classes(
        "h-3.5rem whitespace-nowrap px-1rem text-start text-12 font-medium text-neutral-content",
        className
      )}
    >
      {children}
    </th>
  );
};

type TableBoxedLayoutTDProps = IProps &
  React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  >;

export const TableBoxedLayoutTD = ({children, className, ...props}: TableBoxedLayoutTDProps) => {
  return (
    <td
      className={AppHelper.classes(
        "h-3.5rem whitespace-nowrap px-1rem text-14 text-neutral first:rounded-es-btn first:rounded-ss-btn last:rounded-ee-btn last:rounded-se-btn",
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
};

export const TableBoxedLayoutSkeleton = (props: Omit<TableBoxedLayoutTDProps, "children">) => {
  return (
    <TableBoxedLayoutTD {...props}>
      <div className='skeleton h-2rem w-full rounded-btn opacity-40'></div>
    </TableBoxedLayoutTD>
  );
};

export const TableBoxedLayoutFlexContent = ({children}: IProps) => {
  return <div className='flex items-center gap-0.5rem'>{children}</div>;
};

export const TableBoxedLayoutActions = ({children}: IProps) => {
  return (
    <Dropdown button={<Dots />}>
      <DropdownMenu className='flex min-w-[11rem] flex-col gap-0.5rem'>{children}</DropdownMenu>
    </Dropdown>
  );
};

interface ITableBoxedLayoutActionButtonProps {
  title: string;
  modal?: IModals;
  data?: unknown;
  icon: React.ReactNode;
}
export const TableBoxedLayoutActionButton = ({
  title,
  modal,
  data,
  icon,
}: ITableBoxedLayoutActionButtonProps) => {
  const {show, setClassName} = useModal();

  return (
    <div
      className='flex cursor-pointer items-center gap-0.75rem rounded-btn py-0.5rem text-12 transition-all hover:bg-primary hover:ps-0.75rem hover:text-primary-content'
      onClick={() => {
        show(modal ?? "accept", data);

        if (typeof data === "object" && Object.prototype.hasOwnProperty.call(data, "className")) {
          setClassName((data as {className: string}).className);
        }
      }}
    >
      {icon}
      {title}
    </div>
  );
};

interface IButtonProps {
  data?: unknown;
}

export const TableBoxedLayoutActionButtonWithdraw = ({data}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.withdraw}
      title='Withdraw'
      icon={
        <IconSell
          svgProps={{
            className: "w-1rem",
          }}
        />
      }
      data={data}
    />
  );
};

export const TableBoxedLayoutActionButtonDeposit = ({data}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.deposit}
      title='Deposit'
      icon={
        <IconBuy
          svgProps={{
            className: "w-1rem",
          }}
        />
      }
      data={data}
    />
  );
};

export const TableBoxedLayoutActionButtonSwap = ({data}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.swap}
      title='Swap'
      icon={
        <IconSendReceive
          svgProps={{
            className: "w-1rem",
          }}
        />
      }
      data={data}
    />
  );
};

export const TableBoxedLayoutActionButtonMakePrimary = ({data = {}}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.makePrimary}
      title='Make Primary'
      icon={
        <IconPrimary
          svgProps={{
            className: "w-1rem",
          }}
        />
      }
      data={{
        className: confirmationModalWidth,
        ...(data as object),
      }}
    />
  );
};

export const TableBoxedLayoutActionButtonEdit = ({data = {}}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.edit}
      title='Edit'
      icon={
        <IconEdit
          svgProps={{
            className: "w-1rem",
          }}
        />
      }
      data={data}
    />
  );
};

export const TableBoxedLayoutActionButtonView = ({data = {}}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.view}
      title='View'
      icon={
        <IconEye
          svgProps={{
            className: "w-1rem",
          }}
        />
      }
      data={data}
    />
  );
};

export const TableBoxedLayoutActionButtonViewLink = ({to}: {to: string}) => {
  return (
    <Link
      to={to}
      className='flex cursor-pointer items-center gap-0.75rem rounded-btn py-0.5rem text-12 transition-all hover:bg-primary hover:ps-0.75rem hover:text-primary-content'
    >
      <IconEye
        svgProps={{
          className: "w-1rem",
        }}
      />
      View
    </Link>
  );
};

export const TableBoxedLayoutActionButtonDelete = ({data = {}}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.delete}
      title='Delete'
      icon={
        <IconTrash
          svgProps={{
            className: "w-1rem",
          }}
        />
      }
      data={{
        className: confirmationModalWidth,
        ...(data as object),
      }}
    />
  );
};

export const TableBoxedLayoutActionButtonSuspend = ({data = {}}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.suspended}
      title='Suspend'
      icon={
        <IconLock
          svgProps={{
            className: "w-1rem",
          }}
        />
      }
      data={{
        className: confirmationModalWidth,
        ...(data as object),
      }}
    />
  );
};

export const TableBoxedLayoutActionButtonActive = ({data = {}}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.active}
      title='Active User'
      icon={
        <IconLock
          svgProps={{
            className: "w-1rem",
          }}
        />
      }
      data={{
        className: confirmationModalWidth,
        ...(data as object),
      }}
    />
  );
};

export const TableBoxedLayoutActionButtonPhoneVerify = ({data = {}}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.phoneVerify}
      title='Phone Verify'
      icon={
        <IconCheck
          svgProps={{
            className: "w-1rem text-success",
          }}
        />
      }
      data={{
        className: confirmationModalWidth,
        ...(data as object),
      }}
    />
  );
};

export const TableBoxedLayoutActionButtonEmailVerify = ({data = {}}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.emailVerify}
      title='Email Verify'
      icon={
        <IconCheck
          svgProps={{
            className: "w-1rem text-success",
          }}
        />
      }
      data={{
        className: confirmationModalWidth,
        ...(data as object),
      }}
    />
  );
};
export const TableBoxedLayoutActionButtonAccept = ({data = {}}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.accept}
      title='Accept'
      icon={
        <IconCheck
          svgProps={{
            className: "w-1rem text-success",
          }}
        />
      }
      data={{
        className: confirmationModalWidth,
        ...(data as object),
      }}
    />
  );
};

export const TableBoxedLayoutActionButtonReject = ({data = {}}: IButtonProps) => {
  return (
    <TableBoxedLayoutActionButton
      modal={EnumModals.reject}
      title='Reject'
      icon={
        <IconClose
          svgProps={{
            className: "w-1rem text-error",
          }}
        />
      }
      data={{
        className: confirmationModalWidth,
        ...(data as object),
      }}
    />
  );
};
