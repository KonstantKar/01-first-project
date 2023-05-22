import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <div className={s.navItem}>
      <NavLink to={props.to} activeClassName={s.activeLink}>
        {props.navName}
      </NavLink>
    </div>
  );
};

export default NavItem;
