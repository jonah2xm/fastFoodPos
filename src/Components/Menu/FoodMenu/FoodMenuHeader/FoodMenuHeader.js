import React from "react";
import styles from "./FoodMenuHeader.module.css";
import searchIcon from "../../../Pictures/Icons/loupe.png";
const FoodMenuHeader = (props) => {
  const userName = "Younes";
  const inputInSearch = (e) => {
    props.searchResult(e.target.value);
  };
  return (
    <div className={styles.menuHeader}>
      <div>
        <h1>Welcome, {userName}</h1>
        <p>Discover what's you need easily</p>
      </div>
      <div>
        <img src={searchIcon} alt="search"></img>
        <input
          type="search"
          placeholder="Search Product"
          onChange={inputInSearch}
        />
      </div>
    </div>
  );
};
export default FoodMenuHeader;
