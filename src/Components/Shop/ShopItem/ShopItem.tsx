import React from "react";
import s from "./ShopItem.module.css";

interface ShopProductProps {
  id: number;
  product: string;
  img: any;
  price: number;
}

const ShopProduct: React.FC<ShopProductProps> = (props) => {
  return (
    <div className={s.itemInfo}>
      <h2>{props.product}</h2>
      <img src={props.img} alt="" />
      <p>{props.price}$</p>
      <button>Read more</button>
    </div>
  );
};

export default ShopProduct;
