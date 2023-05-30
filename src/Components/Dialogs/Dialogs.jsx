import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Dialogs = (props) => {
  const dialogsData = useSelector((state) => state.dialogs.dialogsData);
  const newMessageText = useSelector((state) => state.dialogs.newMessageText);
  const messageData = useSelector((state) => state.dialogs.messageData);
  let dialogsElements = dialogsData.map((el) => {
    return <DialogItem id={el.id} name={el.name} />;
  });
  let messageElements = messageData.map((el) => {
    return <Message id={el.id} message={el.message} />;
  });

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.onMessageChange(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messageElements}
        <div>
          <textarea
            onChange={onMessageChange}
            ref={newMessageElement}
            value={newMessageText}
          ></textarea>
        </div>
        <button onClick={addMessage}>send message</button>
      </div>
    </div>
  );
};
export default Dialogs;
