import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import {
  getAuthAccountDataTC,
  setAuthUserDataAC,
} from "../../Redux/authReducer";
import { useEffect, useState } from "react";
import { authAPI } from "../../API/api";
const HeaderContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth.data);
  const isAuth = useSelector((state) => state.auth.isAuth);

  //Код до добавления thunk-creator-a
  /* const [isAuth, setIsAuth] = useState(false); 

  const setAccountData = (loadData) => {
    dispatch(setAuthUserDataAC(loadData));
  };

  const getAuthAccountData = () => {
    authAPI.getAxiosMyAccount().then((data) => {
      if (data.resultCode === 0) {
        setAccountData(data.data);
        setIsAuth(true);
      }
    });
  }; */

  const getAuthAccountData = () => {
    dispatch(getAuthAccountDataTC());
  };

  useEffect(() => {
    getAuthAccountData();
  }, []);

  return <Header data={data} isAuth={isAuth} />;
};
export default HeaderContainer;
