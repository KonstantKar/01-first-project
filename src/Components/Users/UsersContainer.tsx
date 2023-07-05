import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, setCurrentPages } from "../../Redux/usersReducer";
import Users from "./Users";
import ReactPaginate from "react-paginate";
import s from "./UsersContainer.module.css";
import Loader from "../Loader/Loader";
import { usersAPI } from "../../API/api";
import PrivateRoute from "../../PrivateRoute/PrivateRoute.js";
import { RootState } from "../../Redux/redux-store";
import Container from "@mui/material/Container";
const UsersContainer: React.FC = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(8); // Количество пользователей на странице
  const [isLoading, setIsLoading] = useState(false); // Состояние для отображения загрузки\
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  const getUsersData = (page: number) => {
    usersAPI.getAxiosUsers(page, pageSize).then((data) => {
      dispatch(setUsers(data.items));
      setTotalPages(Math.ceil(data.totalCount / pageSize));
      setCurrentPage(page);
    });
  };

  useEffect(() => {
    getUsersData(currentPage);
  }, [currentPage]);

  const handlePageChange = (selectedPage: any) => {
    const newCurrentPage = selectedPage.selected + 1;
    dispatch(setCurrentPages(newCurrentPage)); // Обновляем currentPage в Redux
    setCurrentPage(newCurrentPage); // Обновляем текущую страницу локально
  };

  return (
    <PrivateRoute isAuth={isAuth} fallback={"/Login"}>
      <div>
        {isLoading ? (
          <Loader /> // Отображаем загрузку, если ... добавить логику.
        ) : (
          <React.Fragment>
            <Users />
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={100}
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
    </PrivateRoute>
  );
};

export default UsersContainer;
