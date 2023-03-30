import { useState, useEffect } from "react";

export default function useApiCall(call, page, setIsLoading) {
  const [response, setResponse] = useState({
    data: [],
    error: false,
    error_message: "",
  });

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      call(page)
        .then(({ results }) => {
          setResponse({
            data: results,
            error: false,
            error_message: "",
          });
          setIsLoading(false);
        })
        .catch((err) => {
          setResponse({
            data: null,
            error: true,
            error_message: err,
          });
          setIsLoading(false);
        });
    }, 3000);
  }, [page]);

  return response;
}
