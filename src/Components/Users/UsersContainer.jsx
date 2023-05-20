import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../Redux/usersReducer";
import Users from "./Users";
import axios from "axios";
import ReactPaginate from "react-paginate";
import s from "./UsersContainer.module.css";

const UsersContainer = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(4); // Количество пользователей на странице

  const follow = (userID) => {
    dispatch(followAC(userID));
  };

  const unfollow = (userID) => {
    dispatch(unfollowAC(userID));
  };

  const setUsers = (users) => {
    dispatch(setUsersAC(users));
  };

  const getUsers = (page) => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}` // на данном сервере значения page и count, однако могут быть и другие значения, смотри документацию
      )
      .then((response) => {
        setUsers(response.data.items);
        setTotalPages(Math.ceil(response.data.totalCount / pageSize));
      });
  };

  useEffect(() => {
    getUsers(currentPage);
  }, [currentPage]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  return (
    <div>
      <Users
        follow={follow}
        unfollow={unfollow}
        users={users}
        getUsers={getUsers}
      />
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={s.pagination}
        activeClassName={s.active}
        previousClassName={s.previous}
        nextClassName={s.next}
        breakClassName={s.break}
      />
    </div>
  );
};
export default UsersContainer;
