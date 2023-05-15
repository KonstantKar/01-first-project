import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../Redux/usersReducer";
import Users from "./Users";
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

  return (
    <Users
      follow={follow}
      unfollow={unfollow}
      users={users}
      setUsers={setUsers}
    />
  );
};

export default UsersContainer;
