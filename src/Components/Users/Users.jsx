import s from "./Users.module.css";
import React from "react";
import UsersComp from "./UsersComp.jsx/UsersComp";
import axios, * as others from "axios";

const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((responce) => {
        props.setUsers(responce.data.items);
      });
  }
  let usersElements = props.users.map((el) => {
    return (
      <UsersComp
        id={el.id}
        status={el.status}
        followed={el.followed}
        fullName={el.name}
        location={el.location}
        fotoURL={el.photos.small}
        follow={props.follow}
        unFollow={props.unfollow}
      />
    );
  });
  return (
    <div className={s.usersBlock}>
      <div className={s.users}>{usersElements}</div>
    </div>
  );
};
export default Users;
