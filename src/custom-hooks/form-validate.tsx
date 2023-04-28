import { useState } from "react";

const UseFormValidate = (validation: any, isElemString: boolean = false) => {
  const defaultValue = isElemString ? "" : 0;
  const [elemName, setElemName] = useState<string | number>(defaultValue);
  const [isElemNameTouched, setIsElemNameTouched] = useState<boolean>(false);


  let isElemNameEmpty = typeof elemName === "string" ? elemName.trim() === "" : elemName === 0;
  const isElemNameLength = validation(elemName);

  let isElemNameValid = isElemNameTouched && isElemNameEmpty;
  let isRegxMatch = typeof elemName === "string"  && elemName.includes('php') 
  const returnObj = {
    elemName,
    setElemName,
    isElemNameTouched,
    setIsElemNameTouched,
    isElemNameEmpty,
    isElemNameLength,
    isElemNameValid,
    isRegxMatch
  };

  return returnObj;
};

export default UseFormValidate;
