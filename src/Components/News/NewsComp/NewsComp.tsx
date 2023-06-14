import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NewsComp.module.css";

interface NewsCompProps {
  id: number;
  title: string;
}

const NewsComp: React.FC<NewsCompProps> = ({ id, title }) => {
  return (
    <div className={s.newsItem}>
      <NavLink key={id} to={"/news/" + id}>
        <li>{title}</li>
      </NavLink>
    </div>
  );
};

export default NewsComp;
