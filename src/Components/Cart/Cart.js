import React from "react";
import styles from "./Cart.module.css";

import CartHeader from "./CartHeader/CartHeader";
import CartMain from "./CartMain/CartMain";
import CartFooter from "./CartFooter/CartFooter";
const Cart = () => {
  return (
    <div className={styles.cart}>
      <CartHeader></CartHeader>
      <CartMain></CartMain>
      <CartFooter></CartFooter>
    </div>
  );
};
export default Cart;
