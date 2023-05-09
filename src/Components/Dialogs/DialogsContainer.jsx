import React from "react";
import Dialogs from "./Dialogs";
import {
  addNewMessageTextActionCreator,
  addMessageActionCreator,
} from "../../Redux/dialogsReducer";

const DialogsContainer = (props) => {
  let state = props.store.getState();
  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    let action = addNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      addMessage={addMessage}
      onMessageChange={onMessageChange}
      dialogsData={state.dialogs.dialogsData}
      newMessageText={state.dialogs.newMessageText}
      messageData={state.dialogs.messageData}
    />
  );
};
export default DialogsContainer;
