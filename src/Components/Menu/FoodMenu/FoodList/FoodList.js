import React, { useContext } from "react";
import FoodItems from "./FoodItems/FoodItems";
import styles from "./FoodList.module.css";
import { CSSTransition } from "react-transition-group";
import { FastFoodContext } from "../../../Context/FastFoodContext";

const FoodList = (props) => {
  console.log(props.menu);
  const ctx = useContext(FastFoodContext);
  const addToCartHandler = (id, name, price, img) => {
    const item = {
      id: id,
      name: name,
      price: price,
      amount: 1,
      img: img,
    };
    ctx.addToCart(item);
  };

  return (
    <div className={styles.foodListDiv}>
      {props.menu.map((menu) => {
        return (
          <FoodItems
            key={menu.id}
            id={menu.id}
            name={menu.name}
            type={menu.type}
            img={menu.img}
            description={menu.description}
            price={menu.price}
            pc={menu.pc}
            addToCart={addToCartHandler}
          ></FoodItems>
        );
      })}
    </div>
  );
};
export default FoodList;
