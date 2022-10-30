import { useEffect, useState } from "react";

const useLocalStorage = (key: string, initialValue: any) => {
  const savedValue = JSON.parse(localStorage.getItem(key) || "");
  const [value, setValue] = useState(savedValue ? savedValue : initialValue);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
};

export default useLocalStorage;
