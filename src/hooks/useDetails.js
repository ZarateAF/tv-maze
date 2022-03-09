import { useEffect, useState } from "react";
import { fetchDetail } from "../services/series";

export const useDetails = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    const id = window.location.search.split("=")[1];
    fetchDetail(id)
      .then(({ body }) => {
        let reader = body.getReader();
        let decoder = new TextDecoder("utf-8");
        return reader.read().then(function (result) {
          return setData(JSON.parse(decoder.decode(result.value)));
        });
      })
      .catch((e) => console.warn(e));
  }, []);


  return {
    data,
  };
};
