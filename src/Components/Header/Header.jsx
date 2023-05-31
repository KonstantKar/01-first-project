import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://sun6-20.userapi.com/s/v1/ig2/4WvNWJBXKIoG5gozieK0XZOWByvAvQ_Q7YgGZMzGlkfcSRTPH_cyiNkWIspJY2an5zwRmAaz40ErvlWLVtfs541s.jpg?size=1024x1024&quality=95&crop=0,0,1024,1024&ava=1"
        alt="error"
      />
      {props.isAuth ? (
        <div className={s.profile}>
          <span>{props.data.login}</span>
          <div className={s.exit}>
            <button onClick={props.leaveProfile}>Выйти из профиля</button>
          </div>
        </div>
      ) : (
        <div className={s.profile}>
          <NavLink to={"/login"}>Login</NavLink>
        </div>
      )}
    </header>
  );
};
export default Header;
