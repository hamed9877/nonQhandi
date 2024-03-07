"use client";
import { UserData } from "@/interface/Data";
import { useEffect, useState } from "react";

// Define an interface to represent the structure of your data

const useLocalStorage = (key: string, initialValue?: UserData) => {
  const [value, setValue] = useState<UserData>(initialValue);

  useEffect(() => {
    if (key && localStorage.getItem(key)) {
      setValue(JSON.parse(localStorage.getItem(key)));
      console.log("omaaade");
    }
    if (key && initialValue && !localStorage.getItem(key))
      localStorage.setItem(key, JSON.stringify(value));
      console.log("ooooomaaade");
  }, []);

  const setLocalStorageValue = (nestedKeyPath: string, newValue: any) => {
    setValue((prevValue) => {
      const updatedValue =
        typeof newValue === "function" ? newValue(prevValue) : newValue;
      const updatedObject = { ...prevValue };
      let target: any = updatedObject;

      if (nestedKeyPath.includes(".")) {
        const keys = nestedKeyPath.split(".");
        target = { ...prevValue, [keys[1]]: newValue };
        localStorage.setItem(keys[0], JSON.stringify(target));
      } else {
        target = { ...prevValue, [nestedKeyPath]: newValue };
        localStorage.setItem(nestedKeyPath, JSON.stringify(target));
      }

      return target;
    });
  };

  return [value, setLocalStorageValue] as const;
};

export default useLocalStorage;
