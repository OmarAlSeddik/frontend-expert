import { useRef, useState } from "react";

const useStateWithHistory = (initialState: any) => {
  const [state, setStateInternal] = useState(initialState);
  const historyArray = useRef([state]);
  const historyIndex = useRef(0);

  const setState = (newState: any) => {
    historyArray.current.push(newState);
    historyIndex.current = historyArray.current.length - 1;
    setStateInternal(newState);
  };

  const goBack = () => {
    if (historyIndex.current === 0) return;
    historyIndex.current--;
    setStateInternal(historyArray.current[historyIndex.current]);
  };

  const goForward = () => {
    if (historyIndex.current === historyArray.current.length - 1) return;
    historyIndex.current++;
    setStateInternal(historyArray.current[historyIndex.current]);
  };

  return [state, setState, goBack, goForward, historyArray.current];
};

export default useStateWithHistory;
