import React from "react";
import { useSelector } from "react-redux";
import Music from "./Music";
import PrivateRoute from "../../PrivateRoute/PrivateRoute.js";
import { RootState } from "../../Redux/redux-store";

const MusicContainer: React.FC = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  return (
    <PrivateRoute isAuth={isAuth} fallback={"/Login"}>
      <Music />
    </PrivateRoute>
  );
};

export default MusicContainer;
