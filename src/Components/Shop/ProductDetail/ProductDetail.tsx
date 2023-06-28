import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ShopItem } from "../../../Redux/types";
import ShopProduct from "../ShopItem/ShopProduct";
import s from "./ProductDetail.module.css";

const ProductDetail: React.FC = () => {
  const { shopId } = useParams<{ shopId: string }>();
  const [product, setProduct] = useState<ShopItem | null>(null);

  const getCatalog = async (shopId: number) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/catalogData/${shopId}`
      );
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCatalog(Number(shopId));
  }, [shopId]);

  return (
    <div>
      {product ? (
        <div>
          <div className={s.product}>
            <ShopProduct
              productName={product.productName}
              price={product.price}
              img={product.img}
              id={product.id}
              key={product.id}
            />
            <div className={s.description}>
              <h1>Описание</h1>
              <div>{product.description}</div>
              <NavLink to="/Shop">
                <button> К товарам! </button>
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div>Продукт не найден</div>
      )}
    </div>
  );
};

export default ProductDetail;
