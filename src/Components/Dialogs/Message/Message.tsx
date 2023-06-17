import React from "react";
import s from "../Dialogs.module.css";

interface MessageProps {
  message: string;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return <div className={s.message}>{message}</div>;
};

export default Message;
