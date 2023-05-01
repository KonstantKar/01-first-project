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
    let text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messageElements}
        <div>
          <textarea ref={newMessageElement}>message</textarea>
        </div>
        <button onClick={addMessage}>add message</button>
      </div>
    </div>
  );
};
export default Dialogs;
