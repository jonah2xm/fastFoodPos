import React, { useState } from "react";
import styles from "./FoodCategories.module.css";

const FoodCategories = (props) => {
  const [categoriesHandler, setCategoriesHandler] = useState({
    all: true,
    taco: false,
    pizza: false,
    sandwich: false,
    juice: false,
  });
  const whiteIcons = {
    all: "https://cdn-icons-png.flaticon.com/512/1037/1037793.png",
    tacos: "https://cdn-icons-png.flaticon.com/512/4363/4363519.png",
    pizza: "https://cdn-icons-png.flaticon.com/512/596/596075.png",
    sandwich: "https://cdn-icons-png.flaticon.com/512/2616/2616922.png",
    juice: "https://cdn-icons-png.flaticon.com/512/567/567099.png",
  };

  const activeCategory = (event) => {
    let categorie = {};
    switch (event.target.id) {
      case "all":
        setCategoriesHandler(() => {
          return {
            all: true,
            taco: false,
            pizza: false,
            sandwich: false,
            juice: false,
          };
        });
        categorie = {
          all: true,
          taco: false,
          pizza: false,
          sandwich: false,
          juice: false,
        };
        props.MenuHandler(categorie);
        break;
      case "taco":
        setCategoriesHandler(() => {
          return {
            all: false,
            taco: true,
            pizza: false,
            sandwich: false,
            juice: false,
          };
        });
        categorie = {
          all: false,
          taco: true,
          pizza: false,
          sandwich: false,
          juice: false,
        };
        props.MenuHandler(categorie);
        break;
      case "pizza":
        setCategoriesHandler(() => {
          return {
            all: false,
            taco: false,
            pizza: true,
            sandwich: false,
            juice: false,
          };
        });
        categorie = {
          all: false,
          taco: false,
          pizza: true,
          sandwich: false,
          juice: false,
        };
        props.MenuHandler(categorie);
        break;
      case "sandwich":
        setCategoriesHandler(() => {
          return {
            all: false,
            taco: false,
            pizza: false,
            sandwich: true,
            juice: false,
          };
        });
        categorie = {
          all: false,
          taco: false,
          pizza: false,
          sandwich: true,
          juice: false,
        };
        props.MenuHandler(categorie);
        break;
      case "juice":
        setCategoriesHandler(() => {
          return {
            all: false,
            taco: false,
            pizza: false,
            sandwich: false,
            juice: true,
          };
        });
        categorie = {
          all: false,
          taco: false,
          pizza: false,
          sandwich: false,
          juice: true,
        };
        props.MenuHandler(categorie);

        break;
      default:
        break;
    }
  };

  return (
    <ul className={styles.foodCategories}>
      <li
        onClick={activeCategory}
        id="all"
        className={categoriesHandler.all === true ? styles.all : ""}
      >
        <img src={whiteIcons.all} alt="all" onClick={activeCategory} id="all" />
        All
      </li>
      <li
        onClick={activeCategory}
        id="taco"
        className={categoriesHandler.taco === true ? styles.taco : ""}
      >
        <img
          src={whiteIcons.tacos}
          alt="taco"
          onClick={activeCategory}
          id="taco"
        />
        Taco
      </li>
      <li
        onClick={activeCategory}
        id="pizza"
        className={categoriesHandler.pizza === true ? styles.pizza : ""}
      >
        <img
          src={whiteIcons.pizza}
          alt="pizza"
          onClick={activeCategory}
          id="pizza"
        />
        Pizza
      </li>
      <li
        onClick={activeCategory}
        id="sandwich"
        className={categoriesHandler.sandwich === true ? styles.sandwich : ""}
      >
        <img
          id="sandwich"
          src={whiteIcons.sandwich}
          alt="sandwich"
          onClick={activeCategory}
        />
        Sandwich
      </li>
      <li
        onClick={activeCategory}
        id="juice"
        className={categoriesHandler.juice === true ? styles.juice : ""}
      >
        <img
          src={whiteIcons.juice}
          alt="juice"
          onClick={activeCategory}
          id="juice"
        />
        Juice
      </li>
    </ul>
  );
};
export default FoodCategories;
