import React, { useCallback, useContext, useState, useReducer } from "react";
import FoodMenuHeader from "./FoodMenuHeader/FoodMenuHeader";
import FoodCategories from "./FoodCategories/FoodCatrgories";
import FoodList from "./FoodList/FoodList";
import { CSSTransition } from "react-transition-group";
import { FastFoodContext } from "../../Context/FastFoodContext";
import { faBriefcaseClock } from "@fortawesome/free-solid-svg-icons";

const subMenuHandler = (state, action) => {
  if (action.type === "SEARCH") {
    if (action.input.length > 0) {
      let tempMenu = [];
      for (let i = 0; i < state.initData.length - 1; i++) {
        if (state.initData[i].name.includes(action.input)) {
          tempMenu.push(state.initData[i]);
        }
      }
      if (state.categorie.all === true) {
        return {
          initData: state.initData,
          searchData: tempMenu,
          categorieData: tempMenu,
          categorie: {
            all: true,
            taco: false,
            pizza: false,
            sandwich: false,
            juice: false,
          },
        };
      } else if (state.categorie.taco === true) {
        let temp2 = [];
        for (let i = 0; i < tempMenu.length - 1; i++) {
          console.log(tempMenu[i]);
          if (tempMenu[i].type === "taco") {
            temp2.push(tempMenu[i]);
          }
        }

        return {
          initData: state.initData,
          searchData: tempMenu,
          categorieData: temp2,
          categorie: {
            all: false,
            taco: true,
            pizza: false,
            sandwich: false,
            juice: false,
          },
        };
      } else if (state.categorie.pizza === true) {
        let temp2 = [];
        for (let i = 0; i < tempMenu.length - 1; i++) {
          if (tempMenu[i].type === "pizza") {
            temp2.push(tempMenu[i]);
          }
        }
        return {
          initData: state.initData,
          searchData: tempMenu,
          categorieData: temp2,
          categorie: {
            all: false,
            taco: false,
            pizza: true,
            sandwich: false,
            juice: false,
          },
        };
      } else if (state.categorie.sandwich === true) {
        let temp2 = [];
        for (let i = 0; i < tempMenu.length - 1; i++) {
          if (tempMenu[i].type === "sandwich") {
            temp2.push(tempMenu[i]);
          }
        }
        return {
          initData: state.initData,
          searchData: tempMenu,
          categorieData: temp2,
          categorie: {
            all: false,
            taco: false,
            pizza: false,
            sandwich: true,
            juice: false,
          },
        };
      } else if (state.categorie.juice === true) {
        let temp2 = [];
        for (let i = 0; i < tempMenu.length - 1; i++) {
          if (tempMenu[i].type === "juice") {
            temp2.push(tempMenu[i]);
          }
        }
        return {
          initData: state.initData,
          searchData: tempMenu,
          categorieData: temp2,
          categorie: {
            all: false,
            taco: false,
            pizza: false,
            sandwich: false,
            juice: true,
          },
        };
      }
    } else {
      if (state.categorie.all === true) {
        return {
          initData: state.initData,
          searchData: state.initData,
          categorieData: state.initData,
          categorie: {
            all: true,
            taco: false,
            pizza: false,
            sandwich: false,
            juice: false,
          },
        };
      } else if (state.categorie.taco === true) {
        let temp2 = [];
        for (let i = 0; i < state.initData.length - 1; i++) {
          if (state.initData[i].type === "taco") {
            temp2.push(state.initData[i]);
          }
        }
        return {
          initData: state.initData,
          searchData: state.initData,
          categorieData: temp2,
          categorie: {
            all: false,
            taco: true,
            pizza: false,
            sandwich: false,
            juice: false,
          },
        };
      } else if (state.categorie.pizza === true) {
        let temp2 = [];
        for (let i = 0; i < state.initData.length - 1; i++) {
          if (state.initData[i].type === "pizza") {
            temp2.push(state.initData[i]);
          }
        }
        return {
          initData: state.initData,
          searchData: state.initData,
          categorieData: temp2,
          categorie: {
            all: false,
            taco: false,
            pizza: true,
            sandwich: false,
            juice: false,
          },
        };
      } else if (state.categorie.sandwich === true) {
        let temp2 = [];
        for (let i = 0; i < state.initData.length - 1; i++) {
          if (state.initData[i].type === "sandwich") {
            temp2.push(state.initData[i]);
          }
        }
        return {
          initData: state.initData,
          searchData: state.initData,
          categorieData: temp2,
          categorie: {
            all: false,
            taco: false,
            pizza: false,
            sandwich: true,
            juice: false,
          },
        };
      } else if (state.categorie.juice === true) {
        let temp2 = [];
        for (let i = 0; i < state.initData.length - 1; i++) {
          if (state.initData[i].type === "juice") {
            temp2.push(state.initData[i]);
          }
        }
        return {
          initData: state.initData,
          searchData: state.initData,
          categorieData: temp2,
          categorie: {
            all: false,
            taco: false,
            pizza: false,
            sandwich: false,
            juice: true,
          },
        };
      }
    }
  } else if (action.type === "PIZZA-CATEGORIE") {
    let tempMenu = [];
    console.log("test");
    if (state.searchData.length > 0) {
      for (var i = state.searchData.length - 1; i >= 0; i--) {
        if (state.searchData[i].type === "pizza") {
          tempMenu.push(state.searchData[i]);
        }
      }
      console.log("pizzasubMenu=", tempMenu);
      return {
        initData: state.initData,
        searchData: state.searchData,
        categorieData: tempMenu,
        categorie: {
          all: false,
          taco: false,
          pizza: true,
          sandwich: false,
          juice: false,
        },
      };
    } else {
      return {
        initData: state.initData,
        searchData: state.searchData,
        categorieData: [],
      };
    }
  } else if (action.type === "TACO-CATEGORIE") {
    console.log("its working");
    let tempMenu = [];
    if (state.searchData.length > 0) {
      for (var i = state.searchData.length - 1; i >= 0; i--) {
        if (state.searchData[i].type === "taco") {
          tempMenu.push(state.searchData[i]);
        }
      }
      console.log("tacosubMenu=", tempMenu);
      return {
        initData: state.initData,
        searchData: state.searchData,
        categorieData: tempMenu,
        categorie: {
          all: false,
          taco: true,
          pizza: false,
          sandwich: false,
          juice: false,
        },
      };
    } else {
      return {
        initData: state.initData,
        searchData: state.searchData,
        categorieData: [],
      };
    }
  } else if (action.type === "SANDWICH-CATEGORIE") {
    let tempMenu = [];
    console.log("test");
    if (state.searchData.length > 0) {
      for (var i = state.searchData.length - 1; i >= 0; i--) {
        if (state.searchData[i].type === "sandwich") {
          tempMenu.push(state.searchData[i]);
        }
      }
      console.log("sandwichsubMenu=", tempMenu);
      return {
        initData: state.initData,
        searchData: state.searchData,
        categorieData: tempMenu,
        categorie: {
          all: false,
          taco: false,
          pizza: false,
          sandwich: true,
          juice: false,
        },
      };
    } else {
      return {
        initData: state.initData,
        searchData: state.searchData,
        categorieData: [],
      };
    }
  } else if (action.type === "JUICE-CATEGORIE") {
    let tempMenu = [];
    console.log("test");
    if (state.searchData.length > 0) {
      for (var i = state.searchData.length - 1; i >= 0; i--) {
        if (state.searchData[i].type === "juice") {
          tempMenu.push(state.searchData[i]);
        }
      }
      console.log("juicesubMenu=", tempMenu);
      return {
        initData: state.initData,
        searchData: state.searchData,
        categorieData: tempMenu,
        categorie: {
          all: false,
          taco: false,
          pizza: false,
          sandwich: false,
          juice: true,
        },
      };
    } else {
      return {
        initData: state.initData,
        searchData: state.searchData,
        categorieData: [],
      };
    }
  } else if (action.type === "ALL-CATEGORIES") {
    let tempMenu = [];
    console.log("test");
    if (state.searchData.length > 0) {
      return {
        initData: state.initData,
        searchData: state.searchData,
        categorieData: state.searchData,
        categorie: {
          all: true,
          taco: false,
          pizza: false,
          sandwich: false,
          juice: false,
        },
      };
    } else {
      return {
        initData: state.initData,
        searchData: state.searchData,
        categorieData: [],
      };
    }
  }
};

const FoodMenu = () => {
  const ctx = useContext(FastFoodContext);
  const initData = {
    initData: ctx.menu,
    searchData: ctx.menu,
    categorieData: ctx.menu,
    categorie: {
      all: true,
      taco: false,
      pizza: false,
      sandwitch: false,
      juice: false,
    },
  };
  const [searchAndCatigorie, dispatchSearchAndCategorie] = useReducer(
    subMenuHandler,
    initData
  );

  const searchResult = (data) => {
    dispatchSearchAndCategorie({ type: "SEARCH", input: data });
  };

  const MenuHandler = (categorie) => {
    console.log("test");
    console.log(categorie.all);
    if (categorie.all === true) {
      dispatchSearchAndCategorie({
        type: "ALL-CATEGORIES",
      });
    } else if (categorie.taco === true) {
      console.log("test====");
      dispatchSearchAndCategorie({
        type: "TACO-CATEGORIE",
      });
    } else if (categorie.pizza === true) {
      dispatchSearchAndCategorie({
        type: "PIZZA-CATEGORIE",
      });
    } else if (categorie.sandwich === true) {
      dispatchSearchAndCategorie({
        type: "SANDWICH-CATEGORIE",
      });
    } else if (categorie.juice === true) {
      dispatchSearchAndCategorie({
        type: "JUICE-CATEGORIE",
      });
    }
  };

  return (
    <React.Fragment>
      <FoodMenuHeader searchResult={searchResult}></FoodMenuHeader>
      <FoodCategories MenuHandler={MenuHandler}></FoodCategories>
      <FoodList menu={searchAndCatigorie.categorieData}></FoodList>
    </React.Fragment>
  );
};
export default FoodMenu;
