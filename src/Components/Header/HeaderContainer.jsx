import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { setAuthUserDataAC } from "../../Redux/authReducer";
import { useEffect, useState } from "react";
import { authAPI } from "../../API/api";
const HeaderContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth.data);
  const [isAuth, setIsAuth] = useState(false);

  const setAccountData = (loadData) => {
    dispatch(setAuthUserDataAC(loadData));
  };

  const getAccountData = () => {
    authAPI.getAxiosMyAccount().then((data) => {
      if (data.resultCode === 0) {
        setAccountData(data.data);
        setIsAuth(true);
      }
    });
  };

  useEffect(() => {
    getAccountData();
  }, []);

  return <Header data={data} isAuth={isAuth} />;
};
export default HeaderContainer;
