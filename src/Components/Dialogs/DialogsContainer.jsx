import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Dialogs from "./Dialogs";
import {
  addNewMessageTextActionCreator,
  addMessageActionCreator,
} from "../../Redux/dialogsReducer";
import { Navigate } from "react-router-dom";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

const DialogsContainer = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  const addMessage = () => {
    dispatch(addMessageActionCreator());
  };

  const onMessageChange = (text) => {
    dispatch(addNewMessageTextActionCreator(text));
  };

  return (
    <PrivateRoute isAuth={isAuth} fallback={"/Login"}>
      <Dialogs addMessage={addMessage} onMessageChange={onMessageChange} />
    </PrivateRoute>
  );
};

export default DialogsContainer;
