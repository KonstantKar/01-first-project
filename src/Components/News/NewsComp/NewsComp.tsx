import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NewsComp.module.css";
import { Typography, Card } from "antd";
interface NewsCompProps {
  id: number;
  title: string;
}

const NewsComp: React.FC<NewsCompProps> = ({ id, title }) => {
  return (
    <div className={s.newsItem}>
      <NavLink key={id} to={"/news/" + id}>
        <Card>
          <Typography.Text>{title}</Typography.Text>
        </Card>
      </NavLink>
    </div>
  );
};
export default NewsComp;
