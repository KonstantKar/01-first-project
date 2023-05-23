import { NavLink } from "react-router-dom";
import s from "./NewsComp.module.css";
const NewsComp = (props) => {
  return (
    <div className={s.newsItem}>
      <NavLink key={props.id} to={"/news/" + props.id}>
        <li>{props.title}</li>
      </NavLink>
    </div>
  );
};

export default NewsComp;
