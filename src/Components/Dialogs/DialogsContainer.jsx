import React, { useContext } from "react";
import Dialogs from "./Dialogs";
import {
  addNewMessageTextActionCreator,
  addMessageActionCreator,
} from "../../Redux/dialogsReducer";
import StoreContext from "../../storeContext";

const DialogsContainer = () => {
  const store = useContext(StoreContext);
  let state = store.getState();
  let addMessage = () => {
    store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    let action = addNewMessageTextActionCreator(text);
    store.dispatch(action);
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
