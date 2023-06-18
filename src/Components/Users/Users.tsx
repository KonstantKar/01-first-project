import React from "react";
import UsersComp from "./UsersComp.jsx/UsersComp";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/redux-store";

const Users: React.FC = () => {
  const users = useSelector((state: RootState) => state.users.users);
  let usersElements = users.map((el: any) => {
    return (
      <UsersComp
        id={el.id}
        status={el.status}
        followed={el.followed}
        fullName={el.name}
        fotoURL={el.photos.small}
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
