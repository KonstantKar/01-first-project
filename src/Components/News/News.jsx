import React from "react";
import NewsComp from "./NewsComp/NewsComp";
import Loader from "../Loader/Loader";
const News = (props) => {
  if (!props.news) {
    return <Loader />;
  }
  let newsElements = props.news.map((el) => {
    return (
      <NewsComp
        key={props.news.id}
        news={props.news}
        id={el.id}
        title={el.title}
      />
    );
  });
  return (
    <div>
      <div>{newsElements}</div>
    </div>
  );
};
export default News;
