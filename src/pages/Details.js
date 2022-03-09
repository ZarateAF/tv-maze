import { useDetails } from "../hooks/useDetails";
import style from "./detail.module.css";

const Details = () => {
  const { data } = useDetails();
  return (
    <div className={style.container}>
      <h1>{data.name}</h1>
      <img className={style.img} src={data.image?.original} />
      <span className={style.description} dangerouslySetInnerHTML={{ __html: data.summary }} />
      <code className={style.code} >{data && JSON.stringify(data, 0, null)}</code>
    </div>
  );
};

export default Details;
