import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Dialogs from "./Dialogs";
import { updateNewMessageText, addMessage } from "../../Redux/dialogsReducer";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

const DialogsContainer = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  const addMessageToStore = () => {
    dispatch(addMessage());
  };

  const onMessageChangeToStore = (text) => {
    dispatch(updateNewMessageText(text));
  };

  return (
    <PrivateRoute isAuth={isAuth} fallback={"/Login"}>
      <Dialogs
        addMessage={addMessageToStore}
        onMessageChange={onMessageChangeToStore}
      />
    </PrivateRoute>
  );
};

export default DialogsContainer;
