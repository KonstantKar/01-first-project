import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  const navBarData = useSelector((state) => state.sidebar.navBarData);
  return <Navbar navBarData={navBarData} />;
};

export default NavbarContainer;
