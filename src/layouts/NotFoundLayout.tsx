import usePageTitle from "@/hooks/usePageTitle";

import {Link} from "react-router-dom";

export const Component = () => {
  usePageTitle("Not Found");
  return (
    <section className='flex h-screen items-center py-2rem text-secondary'>
      <div className='container mx-auto my-2rem flex flex-col items-center justify-center px-1.25rem'>
        <div className='max-w-md text-center'>
          <h2 className='mb-2rem text-9xl font-extrabold'>
            <span className='sr-only'>Error</span>404
          </h2>
          <p className='md:text-30 text-24 font-semibold text-base-content'>
            Sorry, we couldn't find this page.
          </p>
          <p className='mb-8 mt-4 text-neutral-400'>
            But don't worry, you can find plenty of other things on our home page.
          </p>
          <Link to='/' className='btn btn-primary'>
            Back to home page
          </Link>
        </div>
      </div>
    </section>
  );
};

Component.displayName = "NotFoundLayout";
