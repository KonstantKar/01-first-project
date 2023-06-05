import React from "react";
import UsersComp from "./UsersComp.jsx/UsersComp";
import { useSelector } from "react-redux";

const Users = () => {
  const users = useSelector((state) => state.users.users);
  let usersElements = users.map((el) => {
    return (
      <UsersComp
        id={el.id}
        status={el.status}
        followed={el.followed}
        fullName={el.name}
        location={el.location}
        fotoURL={el.photos.small}
        follow={users.follow}
        unFollow={users.unfollow}
        hideButton={users.hideButton}
        users={users}
      />
    );
  });
  return (
    <div>
      <div>{usersElements}</div>
    </div>
  );
};

export default Users;
