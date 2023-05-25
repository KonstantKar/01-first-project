import React from "react";
import s from "./UsersComp.module.css";
import userPhoto from "../../../assets/images/ava.png";
import { NavLink } from "react-router-dom";
import { followAPI, unfollowAPI } from "../../../API/api";

const UsersComp = (props) => {
  let follow = () => {
    followAPI.getAxiosFollow(props.id).then((data) => {
      if (data.resultCode === 0) {
        props.follow(props.id);
      }
    });
  };

  let unFollow = () => {
    unfollowAPI.getAxiosUnfollow(props.id).then((data) => {
      if (data.resultCode === 0) {
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
