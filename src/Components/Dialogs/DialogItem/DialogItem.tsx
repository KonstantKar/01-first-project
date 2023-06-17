import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Dialogs.module.css";

interface DialogItemProps {
  id: number;
  name: string;
}

const DialogItem: React.FC<DialogItemProps> = (props) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={"/dialogs/" + props.id}> {props.name}</NavLink>
    </div>
  );
};
export default DialogItem;
