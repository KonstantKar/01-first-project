import React from "react";
import NewsComp from "./NewsComp/NewsComp";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/redux-store";
import { List } from "antd";
const News = () => {
  const news = useSelector((state: RootState) => state.news.news);

  if (!news) {
    return <Loader />;
  }

  let newsElements = news.map((el) => {
    return <NewsComp key={el.id} id={el.id} title={el.title} />;
  });

  return (
    <List>
      <div>{newsElements}</div>
    </List>
  );
};

export default News;
