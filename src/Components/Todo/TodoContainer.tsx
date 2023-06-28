import s from "./TodoContainer.module.css";
import React, { useState } from "react";
import AddTodo from "./AddTodo/AddTodo";
import TodoList from "./TodoList/TodoList";
import PrivateRoute from "../../PrivateRoute/PrivateRoute.js";
import { RootState } from "../../Redux/redux-store";
import { useSelector } from "react-redux";

const TodoContainer = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "first todo",
      status: true,
    },
    {
      id: 2,
      title: "second todo",
      status: true,
    },
    {
      id: 3,
      title: "third todo",
      status: false,
    },
  ]);

  return (
    <PrivateRoute isAuth={isAuth} fallback={"/Login"}>
      <div className={s.wrapper}>
        <AddTodo todo={todo} setTodo={setTodo} />
        <TodoList todo={todo} setTodo={setTodo} />
      </div>
    </PrivateRoute>
  );
};
export default TodoContainer;
