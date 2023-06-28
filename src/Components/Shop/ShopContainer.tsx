import React, { useEffect, useMemo, useState } from "react";
import s from "./ShopContainer.module.css";
import ShopProduct from "./ShopItem/ShopItem";
import CreateProductForm from "./CreateProductForm/CreateProductForm.js";
import axios from "axios";
import { ShopItem } from "../../Redux/types";

const ShopContainer: React.FC = () => {
  const [catalog, setCatalog] = useState<ShopItem[]>([]);
  //Показывается то, что стоит дороже 20, useMemo же для запоминания результата фильтрации чтобы не фильтровать каждый рендер,а только при изменении каталога
  const FilteredCatalog = useMemo(
    () => catalog.filter((item) => item.price > 0),
    [catalog]
  );

  //взятие данных с фиктивного сервера db.json
  const getCatalog = async () => {
    try {
      const response = await axios.get("http://localhost:4000/catalogData");
      setCatalog(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCatalog();
  }, []);

  const catalogElements =
    FilteredCatalog.length === 0 ? (
      <p>Магазин временно не работает</p>
    ) : (
      FilteredCatalog.map((el) => (
        <ShopProduct
          product={el.productName}
          price={el.price}
          img={el.img}
          id={el.id}
          key={el.id}
        />
      ))
    );

  return (
    <div>
      <h1 className={s.h1}>Catalog</h1>
      <CreateProductForm setCatalog={setCatalog} />
      <div>{catalogElements}</div>
    </div>
  );
};
export default ShopContainer;
