import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../Redux/usersReducer";
import Users from "./Users";
import axios from "axios";

const UsersContainer = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [hideUsers, setHideUsers] = useState(false);

  const follow = (userID) => {
    dispatch(followAC(userID));
  };

  const unfollow = (userID) => {
    dispatch(unfollowAC(userID));
  };

  const setUsers = (users) => {
    dispatch(setUsersAC(users));
  };

  const getUsers = () => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        setUsers(response.data.items);
        setHideUsers(false);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleHideUsers = () => {
    setHideUsers(true);
  };
  const handleShowUsers = () => {
    setHideUsers(false);
  };

  return (
    <div>
      {!hideUsers && (
        <div>
          <button onClick={handleHideUsers}>Скрыть пользователей</button>
          <Users
            follow={follow}
            unfollow={unfollow}
            users={users}
            getUsers={getUsers}
          />
        </div>
      )}
      {hideUsers && (
        <button onClick={handleShowUsers}>Показать пользователей</button>
      )}
    </div>
  );
};

export default UsersContainer;
