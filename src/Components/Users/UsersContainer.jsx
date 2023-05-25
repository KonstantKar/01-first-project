import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  followAC,
  setUsersAC,
  unfollowAC,
  setCurrentPageAC,
} from "../../Redux/usersReducer";
import Users from "./Users";
import ReactPaginate from "react-paginate";
import s from "./UsersContainer.module.css";
import Loader from "../Loader/Loader";
import { usersAPI } from "../../API/api";

const UsersContainer = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(4); // Количество пользователей на странице
  const [isLoading, setIsLoading] = useState(false); // Состояние для отображения загрузки

  const follow = (userID) => {
    dispatch(followAC(userID));
  };
  const unfollow = (userID) => {
    dispatch(unfollowAC(userID));
  };
  const setUsers = (loadUsers) => {
    dispatch(setUsersAC(loadUsers));
  };

  const getUsersData = (page) => {
    usersAPI.getAxiosUsers(page, pageSize).then((/*response*/ data) => {
      setUsers(data.items);
      setTotalPages(Math.ceil(data.totalCount / pageSize));
      setCurrentPage(page);
    });
  };

  useEffect(() => {
    getUsersData(currentPage);
  }, [currentPage]);

  const handlePageChange = (selectedPage) => {
    const newCurrentPage = selectedPage.selected + 1;
    dispatch(setCurrentPageAC(newCurrentPage)); // Обновляем currentPage в Redux
    setCurrentPage(newCurrentPage); // Обновляем текущую страницу локально
  };

  return (
    //ДОБАВИТЬ ЛОГИКУ ОТОБРАЖЕНИЯ LOADER
    <div>
      {isLoading ? (
        <Loader /> // Отображаем загрузку, если ...
      ) : (
        <React.Fragment>
          <Users follow={follow} unfollow={unfollow} users={users} />
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
