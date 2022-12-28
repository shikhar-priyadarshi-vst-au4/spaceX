import {useState, useContext, useRef, useMemo, useEffect} from 'react';
import axios from 'axios';
import {AxiosContext} from "./axios.context";

const useAxios = (url, method, payload, initDataLoader = null) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
    const contextInstance = useContext(AxiosContext);
    const instance = useMemo(() => {
      return contextInstance || axios;
    }, [contextInstance]);
    const controllerRef = useRef(new AbortController());
    const cancel = () => {
      controllerRef.current.abort();
    };
  
    useEffect(() => {
      (async () => {
        try {
          const response = await instance.request({
            signal: controllerRef.current.signal,
            data: payload,
            method,
            url,
          });
          initDataLoader? 
          initDataLoader(response.data):
          setData(response.data);
        } catch (error) {
          initDataLoader? 
          initDataLoader([]):
          setError(error.message);
        } finally {
          setLoaded(true);
        }
      })();
    }, []);
  
    return { cancel, data, error, loaded };
};

export default useAxios;