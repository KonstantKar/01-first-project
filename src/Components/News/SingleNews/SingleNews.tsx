import React from "react";
import Loader from "../../Loader/Loader";
import s from "./SingleNews.module.css";
import { newsData } from "../../../Redux/types";
import { Typography } from "antd";
interface SingleNewsProps {
  state: newsData | null;
}

const SingleNews: React.FC<SingleNewsProps> = (props) => {
  if (!props.state) {
    return <Loader />;
  }

  return (
    <div className={s.singleNewsContainer}>
      <Typography.Title className={s.singleNewsTitle} level={2}>
        {props.state.title}
      </Typography.Title>
      <Typography.Paragraph className={s.singleNewsBody}>
        {props.state.body}
      </Typography.Paragraph>
    </div>
  );
};

export default SingleNews;
