import {useCallback, useRef, useState} from "react";

const useCopy = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  const [copied, setCopied] = useState(false);

  const copiedCallback = useCallback(() => {
    setCopied(true);
    const copiedTimeOut = setTimeout(() => {
      setCopied(false);
      clearTimeout(copiedTimeOut);
    }, 1000);
  }, []);

  const copy = useCallback(() => {
    if (!elementRef.current) return;
    const range = document.createRange();
    range.selectNode(elementRef.current);
    window.getSelection()?.removeAllRanges();
    window.getSelection()?.addRange(range);
    document.execCommand("copy");
    window.getSelection()?.removeAllRanges();
    copiedCallback();
  }, [copiedCallback]);

  return {
    elementRef,
    copied,
    copy,
  };
};

export default useCopy;
