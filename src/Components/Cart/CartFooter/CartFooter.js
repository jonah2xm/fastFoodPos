import React, { useContext } from "react";
import styles from "./CartFooter.module.css";
import { FastFoodContext } from "../../Context/FastFoodContext";
const CartFooter = () => {
  const ctx = useContext(FastFoodContext);
  const resetCart = () => {
    ctx.resetCart();
  };
  return (
    <div className={styles.cartFooter}>
      <div>
        <h2>Totale</h2>
        <h2>${ctx.totPrice.toFixed(2)}</h2>
      </div>
      <button onClick={resetCart}>Print Bill</button>
    </div>
  );
};
export default CartFooter;
