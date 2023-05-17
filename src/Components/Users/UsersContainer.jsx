import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../Redux/usersReducer";
import Users from "./Users";
import axios from "axios";

const UsersContainer = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

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
    if (users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          setUsers(response.data.items);
        });
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Users
      follow={follow}
      unfollow={unfollow}
      users={users}
      getUsers={getUsers}
    />
  );
};

export default UsersContainer;
