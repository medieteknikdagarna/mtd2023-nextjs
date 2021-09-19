//useFetch.js
import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let host = ""
    if(window){
        var matches = window.location.href.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
        host =  matches ? matches[0] : ""
    }
      setLoading(true)
      setData(null);
      setError(null);
      const source = axios.CancelToken.source();
      axios.get(host + endpoint, { cancelToken: source.token })
      .then(res => {
          setLoading(false);
          //checking for multiple responses for more flexibility 
          //with the url we send in.
          res.data.json && setData(res.data.json);
      })
      .catch(err => {
          setLoading(false)
          setError('An error occurred. Awkward..')
      })
      return () => {
          source.cancel();
      }
  }, [endpoint])

  return { data, loading, error }

}

export default useFetch;