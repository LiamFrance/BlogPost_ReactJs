import { useState, useEffect } from "react";
import axios from "axios";
// custom hook to get api
const useSendGETAPI = (initialData, url, convertDataResponse) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(initialData);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    let didCancel = false;
    axios({
      method: "GET",
      url: url,
    })
      .then((response) => {
        if (!didCancel) {
          setIsLoading(false);
          setData(convertDataResponse(response));
          console.log("response", response);
        }
      })
      .catch((error) => {
        if (!didCancel) {
          setIsLoading(false);
          setErrorMessage(error.message);
        }
      });
    return () => {
      didCancel = true;
    };
  }, [url]);
  return {
    isLoading,
    data,
    errorMessage,
  };
};

export default useSendGETAPI;
