import s from "./AddTodo.module.css";
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

const AddTodo: React.FC<TodoListProps> = ({ todo, setTodo }) => {
  const [value, setValue] = useState("");
  const saveTodo = () => {
    //Так как наш id это еще и key, то мы должны каждому новому туду давать непохожий id (ЛИБО ИСПОЛЬЗОВАТЬ БИБЛИОТЕКУ UUID)
    const maxId = todo.reduce((max, todo) => Math.max(max, todo.id), 0);
    const newTodo = {
      id: maxId + 1,
      title: value,
      status: true,
    };
    setTodo([...todo, newTodo]);
    setValue("");
  };

  return (
    <div className={s.container}>
      <input
        className={s.input}
        placeholder="Введите задачу!"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className={s.button} onClick={saveTodo}>
        Добавить
      </button>
    </div>
  );
};
export default AddTodo;
