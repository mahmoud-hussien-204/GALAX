import { useCallback, useState } from "react";

type TypeInputType = "text" | "password";

const usePasswordVisibility = () => {
  const [inputType, setInputType] = useState<TypeInputType>("password");

  const toggleVisibility = useCallback(() => {
    setInputType(inputType === "text" ? "password" : "text");
  }, [inputType]);

  return { inputType, toggleVisibility };
};

export default usePasswordVisibility;
