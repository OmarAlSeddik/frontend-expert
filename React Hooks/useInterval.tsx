import { useEffect, useRef } from "react";

const useInterval = (callback: () => any, delay: number) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay == null) return;
    const intervalID = setInterval(() => callbackRef.current(), delay);
    return () => {
      clearInterval(intervalID);
    };
  }, [delay]);
};

export default useInterval;
