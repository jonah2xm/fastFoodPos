import React, { useContext } from "react";
import img from "../../../Pictures/pizza.jpeg";
import styles from "./CartItems.module.css";
import { FastFoodContext } from "../../../Context/FastFoodContext";
const CartItems = (props) => {
  const ctx = useContext(FastFoodContext);
  const addItem = () => {
    console.log("ere");
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: props.amount,
      img: props.img,
    };
    console.log("add=", typeof props.price);

    ctx.addToCart(item);
  };
  const removeItem = () => {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: props.amount,
      img: props.img,
    };
    console.log("remove=", typeof props.price);

    ctx.removeFromCart(item);
  };
  return (
    <div className={styles.cartItemsDiv} id={props.id}>
      <img src={props.img} alt="pizza"></img>
      <div>
        <p>{props.name}</p>
        <div>
          <p>$ {props.price}</p>
          <ul>
            <li>
              <button onClick={addItem}>+</button>
            </li>
            <li>
              <p>{props.amount}</p>
            </li>
            <li>
              <button onClick={removeItem}>−</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CartItems;
