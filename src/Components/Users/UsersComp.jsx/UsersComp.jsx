import React, { useState } from "react";
import s from "./UsersComp.module.css";
import userPhoto from "../../../assets/images/ava.png";
import { NavLink } from "react-router-dom";
import { followAPI, unfollowAPI } from "../../../API/api";

const UsersComp = (props) => {
  const [hideButton, setHideButton] = useState(false);

  let follow = () => {
    setHideButton(true);
    followAPI.getAxiosFollow(props.id).then((data) => {
      if (data.resultCode === 0) {
        props.follow(props.id);
        setHideButton(false);
      }
    });
  };

  let unFollow = () => {
    setHideButton(true);
    unfollowAPI.getAxiosUnfollow(props.id).then((data) => {
      if (data.resultCode === 0) {
        props.unFollow(props.id);
        setHideButton(false);
      }
    });
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
            <button onClick={unFollow}>Follow</button>
          ) : (
            <button onClick={follow}>Unfollow</button>
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
