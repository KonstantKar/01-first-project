import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Dialogs from "./Dialogs";
import {
  addNewMessageTextActionCreator,
  addMessageActionCreator,
} from "../../Redux/dialogsReducer";

const DialogsContainer = () => {
  const dispatch = useDispatch();
  const dialogsData = useSelector((state) => state.dialogs.dialogsData);
  const newMessageText = useSelector((state) => state.dialogs.newMessageText);
  const messageData = useSelector((state) => state.dialogs.messageData);

  const addMessage = () => {
    dispatch(addMessageActionCreator());
  };

  const onMessageChange = (text) => {
    const action = addNewMessageTextActionCreator(text);
    dispatch(action);
  };

  return (
    <Dialogs
      addMessage={addMessage}
      onMessageChange={onMessageChange}
      dialogsData={dialogsData}
      newMessageText={newMessageText}
      messageData={messageData}
    />
  );
};

export default DialogsContainer;
