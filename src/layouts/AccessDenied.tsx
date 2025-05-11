import GlitchText from "@/components/GlitchText";

import usePageTitle from "@/hooks/usePageTitle";

import {Link} from "react-router-dom";

export const Component = () => {
  usePageTitle("Access Denied");
  return (
    <section className='flex h-screen items-center py-2rem text-secondary'>
      <div className='container mx-auto my-2rem flex flex-col items-center justify-center px-1.25rem'>
        <div className='max-w-md text-center'>
          <GlitchText text='403' />
          <p className='md:text-30 text-24 font-semibold text-base-content'>We are sorry !</p>
          <p className='mb-8 mt-4 text-neutral-400'>
            the page you are trying to access has been restricted access. Please contact the
            administrator.
          </p>
          <Link to='/' className='btn btn-primary'>
            Go to home page
          </Link>
        </div>
      </div>
    </section>
  );
};

Component.displayName = "AccessDenied";
