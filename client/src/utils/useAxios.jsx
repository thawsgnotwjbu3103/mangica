import instance from "./customInstance";
import { useState, useEffect } from "react";

export const get = (apiEndPoint) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await instance.get(apiEndPoint);
        setData(response.data);
        setStatus({ code: response.status, message: response.statusText });
      } catch (err) {
        setError(err);
        setStatus({ code: 500, message: "ERROR" });
      } finally {
        setLoading(false);
      }
    })();
  }, [apiEndPoint]);

  return { loading, data, status, error };
};

export const post = (apiEndPoint, data, config) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await instance.post(apiEndPoint, data, config);
        setStatus({ code: response.status, message: response.statusText });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [apiEndPoint]);

  return { loading, status, error };
};
