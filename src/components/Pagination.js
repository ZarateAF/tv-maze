import React from "react";
import PropTypes from "prop-types";
import style from "./pagination.module.css";

const Pagination = ({ onChangePage, page, max }) => {
  return (
    <div className={style.container}>
      <button disabled={page === 1} className={style.btn} onClick={() => onChangePage(-1)}>
        Previous
      </button>
      <button className={style.btn}>{page}</button>
      <button disabled={page === max} className={style.btn} onClick={() => onChangePage(1)}>
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  onChangePage: PropTypes.func,
  page: PropTypes.number,
  max: PropTypes.number,
};

export default Pagination;
