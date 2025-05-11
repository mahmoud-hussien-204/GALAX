import Button from "./Button";

import IconCheck from "./icons/IconCheck";

type Props = {
  copied: boolean;
  copy: () => void;
};

const CopyButton = ({ copied, copy }: Props) => {
  return (
    <Button
      type='button'
      className='h-2.25rem !min-h-0 min-w-fit rounded-0.25rem'
      onClick={copy}
      disabled={copied}
    >
      {copied ? (
        <span className='text-success'>
          <IconCheck />
        </span>
      ) : (
        "Copy"
      )}
    </Button>
  );
};

export default CopyButton;
