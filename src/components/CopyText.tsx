import AppHelper from "@/helpers/appHelper";

import {useState} from "react";

import IconCheck from "./icons/IconCheck";

interface IProps {
  text: string;
}

const CopyText = ({text}: IProps) => {
  const [copied, setCopied] = useState(false);
  const copyText = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    const timeout = setTimeout(() => {
      setCopied(false);
      clearTimeout(timeout);
    }, 600);
  };

  return (
    <div className='tooltip' data-tip={text}>
      <button
        type='button'
        className={`relative pe-0.25rem ${copied ? "text-success" : ""}`}
        onClick={copyText}
      >
        {AppHelper.handleAddress(text)}
        {copied && (
          <span className='absolute start-full'>
            <IconCheck svgProps={{className: "w-1rem"}} />
          </span>
        )}
      </button>
    </div>
  );
};

export default CopyText;
