import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { useSeries } from "../hooks/useSeries";
import style from "./home.module.css";

const Home = () => {
  const { series, noPage, onChangePage, onRedirect } = useSeries();

  return (
    <div className={style.container}>
      <h1>TV MAZE</h1>
      <Pagination
        onChangePage={onChangePage}
        page={noPage + 1}
        max={series.length}
      />
      <div className={style.content}>
        {series.length > 0 &&
          series[noPage].map((s) => (
            <Card
              key={s.name}
              image={s.image}
              name={s.name}
              genres={s.genres}
              schedule={s.schedule}
              redirect={() => onRedirect(s.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
