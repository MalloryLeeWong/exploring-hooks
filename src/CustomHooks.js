// create custom hook to fetch data

import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState([]);

  // to use async await, create a helper async func to invoke inside useEffect
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  // important empty dependencies array passed in to avoid effect getting called after every render

  return data;
};

export default useFetch;
