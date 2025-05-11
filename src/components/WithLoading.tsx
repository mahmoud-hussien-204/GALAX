import React from "react";

interface IProps extends Required<React.PropsWithChildren> {
  isLoading: boolean;
}

const WithLoading = ({isLoading, children}: IProps) => {
  return (
    <div>
      {isLoading ? (
        <div className='flex items-center justify-center'>
          <div className='h-3rem w-3rem animate-spin rounded-full border-b-2 border-t-2 border-base-content'></div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default WithLoading;
