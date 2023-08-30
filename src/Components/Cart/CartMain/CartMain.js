import React, { useContext } from "react";
import CartItems from "./CartItems/CartItems";
import styles from "./CartMain.module.css";
import { FastFoodContext } from "../../Context/FastFoodContext";
const CartMain = () => {
  const ctx = useContext(FastFoodContext);

  return (
    <div className={styles.cartMain}>
      {ctx.cart.map((cartItem) => {
        return (
          <CartItems
            key={cartItem.id}
            id={cartItem.id}
            name={cartItem.name}
            price={cartItem.price}
            img={cartItem.img}
            amount={cartItem.amount}
          ></CartItems>
        );
      })}
    </div>
  );
};
export default CartMain;
