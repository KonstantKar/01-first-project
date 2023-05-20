import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  followAC,
  setUsersAC,
  unfollowAC,
  setCurrentPageAC,
} from "../../Redux/usersReducer";
import Users from "./Users";
import axios from "axios";
import ReactPaginate from "react-paginate";
import s from "./UsersContainer.module.css";
import Loader from "./Loader/Loader";

const UsersContainer = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(4); // Количество пользователей на странице

  //логика показывания крутилки
  const [isLoading, setIsLoading] = useState(false); // Состояние для отображения загрузки
  const [isPageChanging, setIsPageChanging] = useState(false);

  const follow = (userID) => {
    dispatch(followAC(userID));
  };

  const unfollow = (userID) => {
    dispatch(unfollowAC(userID));
  };

  const setUsers = (loadUsers) => {
    dispatch(setUsersAC(loadUsers));
  };

  const getUsers = (page) => {
    setIsPageChanging(true);
    setIsLoading(true); // Показываем загрузку перед отправкой запроса
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`
      )
      .then((response) => {
        setUsers(response.data.items);
        setTotalPages(Math.ceil(response.data.totalCount / pageSize));
        setIsLoading(false); // Скрываем загрузку после получения данных
        setIsPageChanging(false);
      });
  };

  useEffect(() => {
    getUsers(currentPage);
  }, [currentPage]);

  const handlePageChange = (selectedPage) => {
    if (!isPageChanging) {
      const newCurrentPage = selectedPage.selected + 1;
      dispatch(setCurrentPageAC(newCurrentPage)); // Обновляем currentPage в Redux
      setCurrentPage(newCurrentPage); // Обновляем текущую страницу локально
    }
  };

  return (
    <div>
      {isLoading && !isPageChanging ? (
        <Loader /> // Отображаем загрузку, если isLoading равно true а isPageChanging=false
      ) : (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </div>
  );
};

export default UsersContainer;
