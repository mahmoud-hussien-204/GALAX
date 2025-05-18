import Button from "@/components/Button";

import {useRouteError, isRouteErrorResponse} from "react-router";

const ErrorLayout = () => {
  const routeError = useRouteError();
  console.log(routeError);

  return (
    <section className='flex h-screen items-center justify-center py-2rem'>
      <div className='container text-center'>
        <h2 className='text-shadow-custom mb-2rem text-9xl font-extrabold'>Opps!</h2>
        <p className='md:text-30 text-24 font-semibold text-base-content'>Something went wrong</p>
        <p className='mb-8 mt-4 text-neutral-400'>
          {isRouteErrorResponse(routeError) && (
            <>
              {routeError.status} <br />
              {routeError.statusText} <br />
              {routeError.data}
            </>
          )}
        </p>
        <Button type='button' onClick={() => window.location.reload()}>
          Refresh Page
        </Button>
      </div>
    </section>
  );
};

export default ErrorLayout;
