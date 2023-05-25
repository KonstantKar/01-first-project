import React from "react";
import s from "./UsersComp.module.css";
import userPhoto from "../../../assets/images/ava.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

const UsersComp = (props) => {
  let follow = () => {
    axios
      .post(
        `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
        {},
        {
          withCredentials: true,
          headers: {
            "API-KEY": "6b6ecac8-d7f7-4477-87bb-015031017fed",
          },
        }
      )
      .then((response) => {
        if (response.data.resultCode === 0) {
          props.follow(props.id);
        }
      });
  };

  let unFollow = () => {
    axios
      .delete(
        `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
        {
          withCredentials: true,
          headers: {
            "API-KEY": "6b6ecac8-d7f7-4477-87bb-015031017fed",
          },
        }
      )
      .then((response) => {
        if (response.data.resultCode === 0) {
          props.unFollow(props.id);
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
        {props.followed ? (
          <button onClick={unFollow}>Follow</button>
        ) : (
          <button onClick={follow}>Unfollow</button>
        )}
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
