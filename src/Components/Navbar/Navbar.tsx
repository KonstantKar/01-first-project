import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/redux-store";
import { List, ListItem, ListItemText, Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import s from "./NavBar.module.css";

const Navbar: React.FC = () => {
  const navBarData = useSelector(
    (state: RootState) => state.sidebar.navBarData
  );

  const navElements = navBarData.map((el) => (
    <ListItem component={Link} to={el.to} key={el.navName}>
      <ListItemText primary={el.navName} />
    </ListItem>
  ));

  return (
    <List component="nav" className={s.nav}>
      {navElements}
    </List>
  );
};

export default Navbar;
