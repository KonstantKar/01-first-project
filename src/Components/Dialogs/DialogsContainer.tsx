import React from "react";
import { useSelector } from "react-redux";
import Dialogs from "./Dialogs";
import PrivateRoute from "../../PrivateRoute/PrivateRoute.js";
import { RootState } from "../../Redux/redux-store";

const DialogsContainer: React.FC = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  return (
    <PrivateRoute isAuth={isAuth} fallback={"/Login"}>
      <Dialogs />
    </PrivateRoute>
  );
};

export default DialogsContainer;
