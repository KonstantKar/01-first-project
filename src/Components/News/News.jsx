import React from "react";
import NewsComp from "./NewsComp/NewsComp";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
const News = () => {
  const news = useSelector((state) => state.news.news);
  if (!news) {
    return <Loader />;
  }
  let newsElements = news.map((el) => {
    return <NewsComp key={news.id} news={news} id={el.id} title={el.title} />;
  });
  return (
    <div>
      <div>{newsElements}</div>
    </div>
  );
};
export default News;
