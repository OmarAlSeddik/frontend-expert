import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [responseJSON, setResponseJSON] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    let unmounted = false;
    const callFetch = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const newResponseJSON = await response.json();
        if (unmounted) return;
        setResponseJSON(newResponseJSON);
        setError(null);
      } catch (newError) {
        if (unmounted) return;
        setResponseJSON(null);
        setError(newError);
      }
      setIsLoading(false);
    };
    callFetch();
    return () => {
      unmounted = true;
    };
  }, [url]);
  return { isLoading, responseJSON, error };
};

export default useFetch;
