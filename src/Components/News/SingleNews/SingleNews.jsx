import React from "react";
import Loader from "../../Loader/Loader";
import s from "./SingleNews.module.css";

const SingleNews = (props) => {
  if (!props.state) {
    return <Loader />;
  }

  return (
    <div className={s.singleNewsContainer}>
      <h2 className={s.singleNewsTitle}>{props.state.title}</h2>
      <div className={s.singleNewsBody}>{props.state.body}</div>
    </div>
  );
};

export default SingleNews;
