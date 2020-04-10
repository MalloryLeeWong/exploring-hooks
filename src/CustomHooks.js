import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  // important empty dependencies array passed in to avoid effect getting called after every render

  return data;
};

export default useFetch;
