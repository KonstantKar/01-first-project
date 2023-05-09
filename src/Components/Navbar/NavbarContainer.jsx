import Navbar from "./Navbar";
const NavbarContainer = (props) => {
  debugger;
  let state = props.store.getState();
  return <Navbar navBarData={state.sidebar.navBarData} />;
};
export default NavbarContainer;
