import React from "react";
import UsersComp from "./UsersComp.jsx/UsersComp";

const Users = (props) => {
  const getUsers = () => {
    props.getUsers();
  };
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
    <div>
      <button onClick={getUsers}>Показать пользователей</button>
      <div>{usersElements}</div>
    </div>
  );
};

export default Users;
