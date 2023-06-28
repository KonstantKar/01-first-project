import React from "react";
import s from "./ShopItem.module.css";
import { NavLink, useParams, useLocation } from "react-router-dom";

interface ShopProductProps {
  id: number;
  productName: string;
  img: any;
  price: number;
}

const ShopProduct: React.FC<ShopProductProps> = (props) => {
  const { shopId } = useParams<{ shopId?: string }>();

  return (
    <div className={s.itemInfo}>
      <h2>{props.productName}</h2>
      <img src={props.img} alt="" />
      <div>Цена</div>
      <p>{props.price}$</p>
      {!shopId && (
        <NavLink to={`/shop/${props.id}`} className={s.readMoreButton}>
          <button>Read more</button>
        </NavLink>
      )}
    </div>
  );
};

export default ShopProduct;
