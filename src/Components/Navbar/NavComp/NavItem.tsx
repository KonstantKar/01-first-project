import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavItem.module.css";

interface NavItemProps {
  to: string;
  navName: string;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  return (
    <div>
      <NavLink
        to={props.to}
        className={(navData) => (navData.isActive ? s.active : s.item)}
      >
        {props.navName}
      </NavLink>
    </div>
  );
};

export default NavItem;
