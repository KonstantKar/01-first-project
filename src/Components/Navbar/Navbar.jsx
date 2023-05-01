import NavItem from "./NavComp/NavItem";
import s from "./NavBar.module.css";
const Navbar = (props) => {
  let navElements = props.state.navBarData.map((el) => {
    return <NavItem id={el.id} navName={el.navName} to={el.to} />;
  });
  return (
    <nav className={s.nav}>
      <div>{navElements}</div>
    </nav>
  );
};
export default Navbar;
