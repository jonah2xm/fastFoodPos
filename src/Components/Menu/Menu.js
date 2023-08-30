import React from "react";
import FoodMenu from "./FoodMenu/FoodMenu";
import styles from "./Menu.module.css";
const Menu = () => {
  return (
    <div className={styles.menu}>
      <FoodMenu></FoodMenu>
    </div>
  );
};
export default Menu;
