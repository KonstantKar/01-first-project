import React, { useState } from "react";
import s from "./CreateProductForm.module.css";

const CreateProductForm = ({ setCatalog }) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const createProduct = () => {
    //Благодаря prev мы берем catalog изменений, а так как пушиь запрещено то мы просто копируем его и добавляем к нему новый элемент
    setCatalog((prev) => [
      ...prev,
      { id: prev.length + 1, productName, price, img },
    ]);
    setProductName("");
    setPrice("");
    setImg("");
  };

  return (
    <form className={s.form}>
      <input
        placeholder="Имя"
        onChange={(e) => setProductName(e.target.value)}
        value={productName}
      ></input>
      <input
        placeholder="Цена"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      ></input>
      <input
        placeholder="Картинка"
        onChange={(e) => setImg(e.target.value)}
        value={img}
      ></input>
      <button onClick={createProduct}>Создать</button>
    </form>
  );
};

export default CreateProductForm;
