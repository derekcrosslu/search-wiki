import { useEffect, useState } from "react";
import axios from "axios";

export const useSearch = (query) => {
  const [state, setState] = useState({
    articles: [],
    status: "IDLE",
    error: "",
  });

  // creating cancel token to optimize search results, only allow api call if 3 characters or more are entered on input

  useEffect(() => {
    if (query.length < 3) {
      return;
    }
    axios
      .get(
        `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${query}`
      )
      .then((response) => {
        const parseResponse = [];
        // parsing response object
        for (let i = 0; i < response.data[1].length; i++) {
          parseResponse.push({
            link: response.data[3][i],
            label: response.data[1][i],
          });
        }
        // passing data into state object
        setState({
          articles: parseResponse,
          status: "SUCCESS",
          error: "",
        });
      })
      .catch((error) => {
        //passing error object into state
        setState({
          articles: [],
          status: "ERROR",
          error: error,
        });
      });
  }, [query]);
  return state;
};

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebauncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebauncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
};
