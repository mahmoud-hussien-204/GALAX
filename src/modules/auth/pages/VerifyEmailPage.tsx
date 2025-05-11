import TransitionPage from "@/components/TransitionPage";

import usePageTitle from "@/hooks/usePageTitle";

import FormCard from "../components/FormCard";

import { Link } from "react-router-dom";

import IconChevronLeft from "@/components/icons/IconChevronLeft";

import EmailVerifyForm from "../components/EmailVerifyForm";

export const Component = () => {
  usePageTitle("Reset Password");
  return (
    <TransitionPage>
      <section className=''>
        <FormCard>
          <EmailVerifyForm />
          <div className='mt-1.25rem'>
            <Link to='/auth/login' className='flex items-center gap-0.75rem text-14'>
              <IconChevronLeft
                svgProps={{
                  className: "w-0.75rem h-0.75rem",
                }}
              />
              Back to login
            </Link>
          </div>
        </FormCard>
      </section>
    </TransitionPage>
  );
};

Component.displayName = "EmailVerifyPage";
