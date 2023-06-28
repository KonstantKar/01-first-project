import s from "./TodoList.module.css";
import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

interface TodoListProps {
  todo: Array<items>;
  setTodo: any;
}

interface items {
  id: number;
  title: string;
  status: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ todo, setTodo }) => {
  const [editMode, setEditMode] = useState<number | null>(null);
  const [value, setValue] = useState("");

  const deleteTodo = (id: number) => {
    ////Возвращаются только элементы, которые не равны id элемента с нажатой кнопкой, после мы с помощью  setTodo изменяем todo.
    let newTodo = todo.filter((el) => el.id !== id);
    setTodo(newTodo);
  };

  const editTodo = (id: number, title: string) => {
    setEditMode(id);
    //Значением инпута становится уже существующий title
    setValue(title);
  };

  const saveTodo = (id: number) => {
    let newTodo = todo.map((el) => {
      if (el.id == id) {
        el.title = value;
      }
      return el;
    });
    setTodo(newTodo);
    setEditMode(null);
  };

  return (
    <div className={s.container}>
      <TransitionGroup>
        {todo.map((el) => (
          <CSSTransition key={el.id} classNames="todo" timeout={100}>
            <div key={el.id} className={s.todoItem}>
              {editMode == el.id ? (
                <div>
                  <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
              ) : (
                <div>{el.title}</div>
              )}
              {editMode == el.id ? (
                <div>
                  <button onClick={() => saveTodo(el.id)}>Сохранить</button>{" "}
                </div>
              ) : (
                <div>
                  <button onClick={() => deleteTodo(el.id)}>Удалить</button>
                  <button onClick={() => editTodo(el.id, el.title)}>
                    Редактировать
                  </button>
                </div>
              )}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
export default TodoList;
