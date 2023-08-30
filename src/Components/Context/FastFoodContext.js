import React, { createContext } from "react";

export const FastFoodContext = createContext({
  menu: [],
  cart: [],
  totPrice: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  resetCart: () => {},
});
