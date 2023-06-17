import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import { RootState } from "../../Redux/redux-store";
import { addMessage, updateNewMessageText } from "../../Redux/dialogsReducer";

const Dialogs: React.FC = () => {
  const dispatch = useDispatch();
  const dialogsData = useSelector(
    (state: RootState) => state.dialogs.dialogsData
  );
  const newMessageText = useSelector(
    (state: RootState) => state.dialogs.newMessageText
  );
  const messageData = useSelector(
    (state: RootState) => state.dialogs.messageData
  );

  const newMessageElement = useRef<HTMLTextAreaElement>(null);

  const addMessageHandler = () => {
    dispatch(addMessage());
  };

  const onMessageChangeHandler = () => {
    if (newMessageElement.current) {
      const newText = newMessageElement.current.value;
      dispatch(updateNewMessageText(newText));
    }
  };

  const dialogsElements = dialogsData.map((el) => {
    return <DialogItem id={el.id} name={el.name} />;
  });

  const messageElements = messageData.map((el) => {
    return <Message message={el.message} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messageElements}
        <div>
          <textarea
            onChange={onMessageChangeHandler}
            ref={newMessageElement}
            value={newMessageText}
          ></textarea>
        </div>
        <button onClick={addMessageHandler}>send message</button>
      </div>
    </div>
  );
};

export default Dialogs;
