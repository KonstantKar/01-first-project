import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Dialogs from "./Dialogs.jsx";
import { updateNewMessageText, addMessage } from "../../Redux/dialogsReducer";
import PrivateRoute from "../../PrivateRoute/PrivateRoute.js";
import { RootState } from "../../Redux/redux-store";

const DialogsContainer: React.FC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  const addMessageToStore = () => {
    dispatch(addMessage());
  };

  const onMessageChangeToStore = (text: string) => {
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
