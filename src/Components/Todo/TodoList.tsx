import s from "./TodoList.module.css";
import React, { useState } from "react";

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

  function deleteTodo(id: number) {
    //Возвращаются только элементы, которые не равны id элемента с нажатой кнопкой, после мы с помощью  setTodo изменяем todo.
    let newTodo = todo.filter((el) => el.id != id);
    setTodo(newTodo);
  }

  function statusTodo(id: number) {
    let newTodo = todo.filter((el) => {
      if (el.id == id) {
        el.status = !el.status;
      }
      return el;
    });
    setTodo(newTodo);
  }

  function editTodo(id: number, title: string) {
    setEditMode(id);
    //Значением инпута становится уже существующий title
    setValue(title);
  }

  function saveTodo(id: number) {
    let newTodo = todo.map((el) => {
      if (el.id == id) {
        el.title = value;
      }
      return el;
    });
    setTodo(newTodo);
    setEditMode(null);
  }

  return (
    <div className={s.container}>
      {todo.map((el) => (
        <div key={el.id} className={s.todoItem}>
          {editMode == el.id ? (
            <div>
              {" "}
              <input value={value} onChange={(e) => setValue(e.target.value)} />
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
              <button onClick={() => statusTodo(el.id)}>
                Закрыть/ Открыть
              </button>
              <button onClick={() => editTodo(el.id, el.title)}>
                Редактировать
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default TodoList;
