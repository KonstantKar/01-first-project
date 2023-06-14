import React from "react";
import NewsComp from "./NewsComp/NewsComp";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/redux-store";

const News = () => {
  const news = useSelector((state: RootState) => state.news.news);

  if (!news) {
    return <Loader />;
  }

  let newsElements = news.map((el) => {
    return <NewsComp key={el.id} id={el.id} title={el.title} />;
  });

  return (
    <div>
      <div>{newsElements}</div>
    </div>
  );
};

export default News;
