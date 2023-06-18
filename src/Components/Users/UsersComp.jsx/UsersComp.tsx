import React from "react";
import s from "./UsersComp.module.css";
import userPhoto from "../../../assets/images/ava.png";
import { NavLink } from "react-router-dom";
import { followTC, unFollowTC } from "../../../Redux/usersReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Redux/redux-store";

interface UsersCompProps {
  id: number;
  fullName: string;
  status: string;
  fotoURL: any;
  followed: boolean;
}

const UsersComp: React.FC<UsersCompProps> = (props) => {
  const dispatch = useDispatch();
  const hideButton = useSelector((state: RootState) => state.users.hideButton);

  let follow = () => {
    dispatch<any>(followTC(props.id));
  };

  let unFollow = () => {
    dispatch<any>(unFollowTC(props.id));
  };

  return (
    <div className={s.item}>
      <NavLink to={"/profile/" + props.id}>
        <img
          src={props.fotoURL != null ? props.fotoURL : userPhoto}
          alt="error"
        />
      </NavLink>
      <div>
        {!hideButton &&
          // Проверка состояний loading и hideButton перед отображением кнопки
          (props.followed ? (
            <button onClick={unFollow}>Unfollow</button>
          ) : (
            <button onClick={follow}>Follow</button>
          ))}
      </div>
      <span>
        <span>
          <div>{props.fullName}</div>
          <div>{props.status}</div>
        </span>
      </span>
      <span>
        <div>{"Страна: - "}</div>
        <div>{"Город: -"}</div>
      </span>
    </div>
  );
};

export default UsersComp;
