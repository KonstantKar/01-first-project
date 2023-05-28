import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsersAC, setCurrentPageAC } from "../../Redux/usersReducer";
import Users from "./Users";
import ReactPaginate from "react-paginate";
import s from "./UsersContainer.module.css";
import Loader from "../Loader/Loader";
import { usersAPI } from "../../API/api";
import { Navigate } from "react-router-dom";

const UsersContainer = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const hideButton = useSelector((state) => state.users.hideButton);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(4); // Количество пользователей на странице
  const [isLoading, setIsLoading] = useState(false); // Состояние для отображения загрузки\
  const isAuth = useSelector((state) => state.auth.isAuth);

  const setUsers = (loadUsers) => {
    dispatch(setUsersAC(loadUsers));
  };

  const getUsersData = (page) => {
    usersAPI.getAxiosUsers(page, pageSize).then((data) => {
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

  if (isAuth === false) return <Navigate to={"/Login"} />;

  return (
    //ДОБАВИТЬ ЛОГИКУ ОТОБРАЖЕНИЯ LOADER
    <div>
      {isLoading ? (
        <Loader /> // Отображаем загрузку, если ...
      ) : (
        <React.Fragment>
          <Users users={users} hideButton={hideButton} />
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
