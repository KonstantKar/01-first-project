import React from "react";
import NavItem from "./NavComp/NavItem";
import s from "./NavBar.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/redux-store";
const Navbar: React.FC = () => {
  const navBarData = useSelector(
    (state: RootState) => state.sidebar.navBarData
  );
  let navElements = navBarData.map((el) => {
    return <NavItem navName={el.navName} to={el.to} />;
  });
  return (
    <nav className={s.nav}>
      <div>{navElements}</div>
    </nav>
  );
};
export default Navbar;
