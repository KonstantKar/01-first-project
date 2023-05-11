import { useContext } from "react";
import Navbar from "./Navbar";
import StoreContext from "../../storeContext";

const NavbarContainer = () => {
  const store = useContext(StoreContext);
  let state = store.getState();
  return <Navbar navBarData={state.sidebar.navBarData} />;
};
export default NavbarContainer;
