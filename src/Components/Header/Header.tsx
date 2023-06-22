import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { leaveAccountTC } from "../../Redux/authReducer";
import { RootState } from "../../Redux/redux-store";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.auth.data);
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  const leaveProfile = () => {
    dispatch<any>(leaveAccountTC());
  };

  return (
    <AppBar>
      <Toolbar>
        <img
          src="https://sun6-20.userapi.com/s/v1/ig2/4WvNWJBXKIoG5gozieK0XZOWByvAvQ_Q7YgGZMzGlkfcSRTPH_cyiNkWIspJY2an5zwRmAaz40ErvlWLVtfs541s.jpg?size=1024x1024&quality=95&crop=0,0,1024,1024&ava=1"
          alt="error"
          style={{ maxWidth: "40px", maxHeight: "40px" }}
        />
        {isAuth ? (
          <div className={s.profile}>
            <AccountCircleIcon />
            <span>{data.login}</span>
            <div className={s.exit}>
              <button onClick={leaveProfile}>Выйти из профиля</button>
            </div>
          </div>
        ) : (
          <div className={s.profile}>
            <AccountCircleIcon />
            <NavLink to={"/login"}>Login</NavLink>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Header;
