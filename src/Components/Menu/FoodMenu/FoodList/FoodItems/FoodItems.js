import React, { useContext } from "react";
import styles from "./FoodItems.module.css";
import { FastFoodContext } from "../../../../Context/FastFoodContext";
const FoodItems = (props) => {
  const ctx = useContext(FastFoodContext);
  const choosedFood = (event) => {
    console.log("list=", typeof props.price);
    props.addToCart(props.id, props.name, props.price, props.img);
  };
  return (
    <div className={styles.foodItems} id={props.id} onClick={choosedFood}>
      <div className={styles.imageDiv} id={props.id}>
        <img src={props.img} alt="no" id={props.id}></img>
      </div>
      <h3 id={props.id}>{props.name}</h3>
      <p id={props.id}>{props.description}</p>
      <div id={props.id}>
        <h2 id={props.id}>${props.price}</h2>
        <h4 id={props.id}>/{props.pc} pc</h4>
      </div>
    </div>
  );
};

export default FoodItems;
