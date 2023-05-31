import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { getAuthAccountDataTC, leaveAccountTC } from "../../Redux/authReducer";
import { useEffect } from "react";

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth.data);
  const isAuth = useSelector((state) => state.auth.isAuth);

  const leaveProfile = () => {
    dispatch(leaveAccountTC());
  };

  const getAuthAccountData = () => {
    dispatch(getAuthAccountDataTC());
  };

  useEffect(() => {
    getAuthAccountData();
  }, []);

  return <Header data={data} isAuth={isAuth} leaveProfile={leaveProfile} />;
};
export default HeaderContainer;
