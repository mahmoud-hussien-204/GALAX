import AppHelper from "@/helpers/appHelper";

import useAuthJourney from "../hooks/useAuthJourney";

import FormCardTitle from "./FormCardTitle";

import IconLink from "@/components/icons/IconLink";

import {IconSuccess} from "@/components/icons/IconSuccess";

import IconChevronLeft from "@/components/icons/IconChevronLeft";

import {Link} from "react-router-dom";

const ConfirmEmailForm = () => {
  const {userEmail} = useAuthJourney();

  return (
    <div>
      <FormCardTitle
        title='Almost done!'
        subtitle='Last step, Click confirmation link in the email to verify your account'
      />

      <div className='my-2rem flex items-center gap-1.5rem'>
        <IconSuccess
          svgProps={{
            className: "w-8rem",
          }}
        />
        <div>
          <h6 className='mb-1.25rem text-20 font-semibold'>Thank you!</h6>
          <p className='text-14 leading-[1.3125rem] text-neutral-content'>
            We sent an email to &nbsp;
            <span className='text-primary'>{AppHelper.hashEmail(userEmail as string)}</span>&nbsp;
            Click confirmation link in the email to verify your account
          </p>
        </div>
      </div>

      <Link
        to='/auth/create-new-password'
        className='text-1rem btn btn-primary min-h-3.25rem w-full font-semibold text-black'
      >
        <IconLink />
        Create New Password
      </Link>

      <Link to='/auth/login' className='mt-4 flex items-center gap-0.75rem text-14'>
        <IconChevronLeft
          svgProps={{
            className: "w-0.75rem h-0.75rem",
          }}
        />
        Back to login
      </Link>
    </div>
  );
};

export default ConfirmEmailForm;
