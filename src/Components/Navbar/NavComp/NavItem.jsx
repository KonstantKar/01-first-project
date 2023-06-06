import { NavLink } from "react-router-dom";
import s from "./NavItem.module.css";

const NavItem = (props) => {
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
