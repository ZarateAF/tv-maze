import React from "react";
import PropTypes from "prop-types";
import style from "./card.module.css";

const Card = ({ redirect, image, name, genres, schedule }) => {
  return (
    <div className={style.container}>
      <img className={style.img} src={image.medium} alt={"Image"}/>
      <div className={style.content} >
        <strong>{name}</strong>
        <span>
          <strong>Generos:</strong>
          {` ${genres.join(", ")}`}
        </span>
        <span>
          <strong>Horario:</strong>
          {` ${schedule.time} ${schedule.days.join(", ")}`}
        </span>
      </div>
      <button className={style.btn} onClick={redirect}>
        VER MAS
      </button>
    </div>
  );
};

Card.propTypes = {
  redirect: PropTypes.func,
  image: PropTypes.object,
  name: PropTypes.string,
  genres: PropTypes.array,
  schedule: PropTypes.object,
};

export default Card;
