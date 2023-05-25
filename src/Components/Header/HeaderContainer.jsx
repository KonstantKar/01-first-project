import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import axios from "axios";
import { setAuthUserDataAC } from "../../Redux/authReducer";
import { useEffect, useState } from "react";
const HeaderContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth.data);
  const [isAuth, setIsAuth] = useState(false);

  const setUserData = (loadData) => {
    dispatch(setAuthUserDataAC(loadData));
  };

  const getUserData = () => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let data = response.data.data;
          setUserData(data);
          setIsAuth(true);
        }
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return <Header data={data} isAuth={isAuth} />;
};
export default HeaderContainer;
