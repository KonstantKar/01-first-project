import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((el) => {
    return <DialogItem id={el.id} name={el.name} />;
  });
  let messageElements = props.state.messageData.map((el) => {
    return <Message id={el.id} message={el.message} />;
  });

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch({ type: "ADD-MESSAGE" });
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch({ type: "ADD-NEW-MESSAGE-TEXT", newText: text });
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
            value={props.newMessageText}
          ></textarea>
        </div>
        <button onClick={addMessage}>add message</button>
      </div>
    </div>
  );
};
export default Dialogs;
