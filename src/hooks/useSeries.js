import { useEffect, useState } from "react";
import { chunk } from "lodash";
import { fetchSeries } from "../services/series";

export const useSeries = () => {
  const [series, setSeries] = useState([]);
  const [noPage, setNoPage] = useState(0);

  useEffect(() => {
    fetchSeries()
      .then(({ body }) => {
        let reader = body.getReader();
        let decoder = new TextDecoder("utf-8");
        return reader.read().then(function (result) {
          const data = chunk(JSON.parse(decoder.decode(result.value)), 20);
          return setSeries(data);
        });
      })
      .catch((e) => console.warn(e));
  }, []);

  const onChangePage = (number) => {
    if (number === 1 && noPage < series.length - 1) setNoPage(noPage + 1);
    if (number === -1 && noPage > 0) setNoPage(noPage - 1);
  };

  const onRedirect = (id) => window.location.assign(`/tv-maze/detail?id=${id}`);

  return {
    series,
    noPage,
    onChangePage,
    onRedirect,
  };
};
