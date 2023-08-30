import React, { useReducer } from "react";
import { FastFoodContext } from "./FastFoodContext";
const defaultCartState = {
  items: [],
  totPrice: 0,
};
const CartHandler = (state, action) => {
  console.log("tot=", typeof state.totPrice);
  console.log("state", state.items);
  console.log(state.totPrice);
  if (action.type === "ADD") {
    const index = state.items.findIndex((item) => item.id === action.item.id);
    if (index > -1) {
      let tempCart = state.items;
      tempCart[index].amount += 1;
      const tempTotPrice = state.totPrice + action.item.price;
      console.log(typeof tempTotPrice.toFixed(2));
      return {
        items: tempCart,
        totPrice: parseFloat(tempTotPrice.toFixed(2)),
      };
    } else {
      let tempCart = state.items;
      tempCart.push(action.item);
      const tempTotPrice = state.totPrice + action.item.price;

      return { items: tempCart, totPrice: parseFloat(tempTotPrice.toFixed(2)) };
    }
  } else if (action.type === "REMOVE") {
    const index = state.items.findIndex((item) => item.id === action.item.id);
    if (state.items[index].amount > 1) {
      let tempCart = state.items;
      tempCart[index].amount -= 1;

      const tempTotPrice = state.totPrice - action.item.price;

      return {
        items: tempCart,
        totPrice: parseFloat(tempTotPrice.toFixed(2)),
      };
    } else {
      let tempCart = state.items;
      const tempTotPrice = state.totPrice - action.item.price;

      tempCart.splice(index, 1);

      return { items: tempCart, totPrice: parseFloat(tempTotPrice.toFixed(2)) };
    }
  } else if (action.type === "RESET") {
    return {
      items: [],
      totPrice: 0,
    };
  }
};

const ContextProvider = (props) => {
  const [stateCart, dispatchCartAction] = useReducer(
    CartHandler,
    defaultCartState
  );
  const addToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeFromCartHandler = (item) => {
    dispatchCartAction({ type: "REMOVE", item: item });
  };
  const resetCartHandler = () => {
    dispatchCartAction({ type: "RESET" });
  };
  const contextValues = {
    menu: [
      {
        id: "p1",
        type: "pizza",
        name: "Hawaiian Pizza",
        img: "https://images.food52.com/D-18JAtQu6LPFe_ofeDZCVsMWfk=/1200x900/31cb11de-d938-4c71-ba43-4afc0d12fee1--2018-1127_ken-forkish-hawaiian-pizza-genius_3x2_rocky-luten_003_v2.jpg",
        description:
          "classic American-style pie topped with cheese, ham, and pineapple chunks.",
        price: 10,
        pc: 1,
      },
      {
        id: "p2",
        type: "pizza",
        name: "Pizza Quattro formaggi",
        img: "https://www.insidetherustickitchen.com/wp-content/uploads/2020/07/Quattro-formaggi-pizza-square-Inside-the-rustic-kitchen.jpg",
        description:
          "Italian pizza topped with a combination of four kinds of cheese, as the name suggests.",
        price: 9.99,
        pc: 1,
      },
      {
        id: "p3",
        type: "pizza",
        name: "Caprese Pizza",
        img: "https://static.onecms.io/wp-content/uploads/sites/19/2014/07/29/caprese-pizza-ck-x.jpg",
        description:
          "Italian pizza that is traditionally topped with cherry tomatoes," +
          " mozzarella di bufala, olive oil, and fresh basil leaves.",
        price: 9.99,
        pc: 1,
      },
      {
        id: "p4",
        type: "pizza",
        name: "New York Pizza",
        img: "https://cdn.vox-cdn.com/thumbor/YH3mo5oHMT-ov1DzdmoZ5i2Xnu4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23843304/SexyBeans_12.jpg",
        description:
          "The pizza is topped with mozzarella and heavily-seasoned tomato sauce (olive oil, tomatoes, garlic, sugar, salt, oregano, crushed red pepper, basil), ",
        price: 9.99,
        pc: 1,
      },
      {
        id: "p5",
        type: "pizza",
        name: "Pizza Marinara",
        img: "https://speisekarte.menu/storage/media/contributions/2213801/Pizza-Marinara.jpg",
        description:
          "Neapolitan pizza with a topping of tomatoes, oregano, garlic, extra virgin olive oil, and sometimes fresh basil. ",
        price: 9.99,
        pc: 1,
      },
      {
        id: "p6",
        type: "pizza",
        name: "Pepperoni Pizza",
        img: "https://www.simplyrecipes.com/thmb/gYJoR__C5IK-04ajtA7SES6BqAk=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg",
        description:
          "American pizza variety which includes one of the country's most beloved toppings. ",
        price: 9.99,
        pc: 1,
      },
      {
        id: "p7",
        type: "pizza",
        name: "Calzone Pizza",
        img: "https://cdn.tasteatlas.com//images/dishes/2dd9d07402f9404bb1149da811a0c42d.jpg?w=905&h=510",
        description:
          "AThis unique type of pizza is characterized by its half-round shape, made by folding a full-sized pizza in half. ",
        price: 9.99,
        pc: 1,
      },
      {
        id: "p8",
        type: "pizza",
        name: "Pizza Margherita",
        img: "https://cdn.shopify.com/s/files/1/0205/9582/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?crop=center&height=800&v=1644590192&width=800",
        description:
          "Pizza Margherita is a delicacy that is literally fit for a queen. In 1889, Queen Margherita of Savoy visited Naples. ",
        price: 9.99,
        pc: 1,
      },
      {
        id: "p9",
        type: "pizza",
        name: "Pizza Napoletana",
        img: "https://cdn.tasteatlas.com//images/dishes/785295d4ab6f4f0bab43d5fcf2e123b6.jpg?w=905&h=510",
        description:
          "Neapolitan pizza topped with a tomato-based sauce flavored with garlic and oregano, and margherita, which is topped with tomatoes, mozzarella.",
        price: 9.99,
        pc: 1,
      },
      {
        id: "t1",
        type: "taco",
        name: "Brria Taco",
        img: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/05/homemade-birria-tacos-recipe-3267.jpg",
        description:
          "A combination of two meats creates the best balance of tender texture (from the chuck roast) and succulence (from the short ribs).",
        price: 9.99,
        pc: 1,
      },
      {
        id: "t2",
        type: "taco",
        name: "Texas Chile Short Rib Tacos",
        img: "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/exps134815_EWD153732C04_10_1b.jpg ",
        description:
          "To round out the tang and heat from the tomatoes and chiles in the sauce for the short ribs.",
        price: 9.99,
        pc: 1,
      },
      {
        id: "t3",
        type: "taco",
        name: "Steak Tacos with Pineapple",
        img: "https://www.foodandwine.com/thmb/sFfQeo36BeKV_urbFnhmEJT6b6g=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/RECIPE1215-XL-steak-tacos-2bf84038f7e84350978ebae03dcbb89d.jpg",
        description:
          "A quick marinade of soy sauce, garlic and ginger flavors the skirt steak for these super-easy tacos.",
        price: 9.99,
        pc: 1,
      },
      {
        id: "t4",
        type: "taco",
        name: "Barbacoa Beef Tacos with Two Sauces",
        img: "https://www.foodandwine.com/thmb/BM5MrXLhMMBKv-6oeCQ4IfL6WHA=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/HD-201406-r-barbacoa-beef-tacos-with-two-sauces-57c2284d00f54b0493a50b6ad0bc78c9.jpg",
        description:
          "The cooked meat is then crisped on the grill, shredded and served in corn tortillas with a sauce made from the braising liquid.",
        price: 9.99,
        pc: 1,
      },
      {
        id: "t5",
        type: "taco",
        name: "Chile-Spiced Skirt Steak Tacos",
        img: "https://www.foodandwine.com/thmb/2LJbikMbFm9MnbitN9hq-HQywwc=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/HD-201005-r-chile-steak-tacos-653e0eaa6bf746ad9af5ae3c7845a408.jpg",
        description:
          "These tacos come together in just two steps, and are ready in 35 minutes.",
        price: 9.99,
        pc: 1,
      },
      {
        id: "t6",
        type: "taco",
        name: "Chipotle-Rubbed Salmon Tacos",
        img: "https://www.foodandwine.com/thmb/l3g3damL67RqIxan4oj5vxeHwuI=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/201005-HD-chorizo-potato-tacos-201005-r-chorizo-potato-tacos-757f0cf070234a8892904bc3d73a8152.jpg",
        description:
          "In just under an hour, this recipe yields you 12 tacos—serve them with a plummy, peppery Zinfandel.",
        price: 9.99,
        pc: 1,
      },
      {
        id: "t7",
        type: "taco",
        name: "Chicken and Cabbage Tacos with Cilantro Cream",
        img: "https://www.foodandwine.com/thmb/GGZrNDGUDcAt1-MwyiI-ZS6kNCE=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/original-201203-HD-blogger-chicken-and-cabbage-tacos-with-cilantro-cream-fa86e84bd8b24865be7c481d5947de96.jpg",
        description:
          "Pickled jalapeño adds heat and bite to these crunchy slaw-covered chicken tacos.",
        price: 9.99,
        pc: 1,
      },

      {
        id: "t8",
        type: "taco",
        name: "Chipotle-Rubbed Salmon Tacos",
        img: "https://www.foodandwine.com/thmb/l3g3damL67RqIxan4oj5vxeHwuI=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/201005-HD-chorizo-potato-tacos-201005-r-chorizo-potato-tacos-757f0cf070234a8892904bc3d73a8152.jpg",
        description:
          "In just under an hour, this recipe yields you 12 tacos—serve them with a plummy, peppery Zinfandel.",
        price: 9.99,
        pc: 1,
      },
      {
        id: "t9",
        type: "taco",
        name: "Chicken and Poblano Tacos with Crema",
        img: "https://www.foodandwine.com/thmb/ZTek7QgxbzS67dRHAJf3JoQE0YU=/2250x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2012-cocktails-HD-chicken-and-poblano-tacos-with-crema-2012-cocktails-c-chicken-and-poblano-tacos-with-crema-1667df08aa07419e920eb886b7271daf.jpg",
        description:
          "You can replace the chicken strips with chorizo in these tacos; for a vegetarian taco, Justin Large recommends subbing in crumbled spiced tofu.",
        price: 9.99,
        pc: 1,
      },
      {
        id: "s1",
        type: "sandwich",
        name: "Scallop Sandwich",
        img: "https://images.food52.com/B_utiTx1nVQ9v58Bt1FMBcFnO0I=/1200x900/ada2680d-7ff9-4304-ab76-9c0df4c78826--food52_10-09-12-4027.jpg",
        description: "Sandwich with Scallop as main meat",
        price: 9.99,
        pc: 1,
      },
      {
        id: "s2",
        type: "sandwich",
        name: "Meat Sandwich",
        img: "https://img.freepik.com/premium-photo/meat-sandwich-with-long-bread-top-blue-table_311379-1215.jpg?w=2000",
        description:
          "Meat sandwich with long bread on top of a blue text text text",
        price: 9.99,
        pc: 1,
      },
      {
        id: "s3",
        type: "sandwich",
        name: "Roast Beef Sandwich",
        img: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/08/roast-beef-sandwich.jpg?resize=640,468&quality=82&strip=all",
        description:
          "The meat is delicious served warm or cold, and it goes with just about any type of cheese.",
        price: 9.99,
        pc: 1,
      },
      {
        id: "s4",
        type: "sandwich",
        name: "Turkey Sandwich",
        img: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/08/roast-beef-sandwich.jpg?resize=640,468&quality=82&strip=all",
        description:
          "The lunch meat goes with pretty much any topping (with cheese).",
        price: 9.99,
        pc: 1,
      },
      {
        id: "s5",
        type: "sandwich",
        name: "Grilled Chicken Sandwich",
        img: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/04/plated-grilled-chicken-sandwich.jpg?resize=640,468&quality=82&strip=all",
        description:
          "A tasty upgrade to eating chicken breast on its own,t's healthier than crispy chicken, but just as delicious.",
        price: 9.99,
        pc: 1,
      },
      {
        id: "s6",
        type: "sandwich",
        name: "Grilled Cheese Sandwich",
        img: "https://hips.hearstapps.com/hmg-prod/images/airfryergrilledcheese1-1644940121.jpg",
        description:
          "If the thought of a grilled cheese sandwich makes your mouth water, you're in good company.",
        price: 9.99,
        pc: 1,
      },
      {
        id: "s7",
        type: "sandwich",
        name: "Tuna Sandwich",
        img: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/08/tuna-sandwich.jpg?resize=640,468&quality=82&strip=all",
        description:
          "Simple but classic, you can't go wrong—and bonus points if you upgrade it to a tuna melt.",
        price: 9.99,
        pc: 1,
      },
      {
        id: "s8",
        type: "sandwich",
        name: "French Dip Sandwich",
        img: "https://www.corriecooks.com/wp-content/uploads/2021/06/french-dip-new.jpg",
        description:
          "Is a hot sandwich consisting of thinly sliced roast beef on a 'French roll' or baguette. ",
        price: 9.99,
        pc: 1,
      },
      {
        id: "s9",
        type: "sandwich",
        name: "Reuben Sandwich",
        img: "https://www.lemonblossoms.com/wp-content/uploads/2021/03/Reuben-Sandwich-S1.jpg",
        description:
          "The Reuben sandwich is a North American grilled sandwich composed of corned beef, Swiss cheese, sauerkraut. ",
        price: 9.99,
        pc: 1,
      },
      {
        id: "j1",
        type: "juice",
        name: "coca cola 330ml",
        img: "https://c1.wallpaperflare.com/preview/347/326/421/box-cola-dose-cola-drink-thumbnail.jpg",
        description:
          "Coca Cola Can 330ml Carbonated Water, Sugar, Colour (Caramel E150d), Phosphoric Acid, Natural Flavourings Including Caffeine. ",
        price: 9.99,
        pc: 1,
      },
      {
        id: "j2",
        type: "juice",
        name: "Pepsi 330ml",
        img: "https://c4.wallpaperflare.com/wallpaper/867/552/905/summer-macro-light-lights-wallpaper-preview.jpg",
        description:
          "A can of Pepsi (12 fl ounces) has 41 grams of carbohydrates (all from sugars), 30 mg of sodium, 0 grams of fat, 0 grams of protein, 38 mg of caffeine, and 150 calories.",
        price: 9.99,
        pc: 1,
      },
      {
        id: "j3",
        type: "juice",
        name: "7up 250ml",
        img: "https://sigarammart.com/wp-content/uploads/2020/08/7up-250ml.jpg",
        description:
          "This product contains carbonated water, citric acid, malic acid, natural lemon flavour, sodium citrate, potassium chloride and pectin.",
        price: 9.99,
        pc: 1,
      },
      {
        id: "j4",
        type: "juice",
        name: "Coca Cola 1L",
        img: "https://www.kindpng.com/picc/m/685-6855552_1-litre-coca-cola-png-download-transparent-png.png",
        description:
          "Coca Cola Can 1L Carbonated Water, Sugar, Colour (Caramel E150d), Phosphoric Acid, Natural Flavourings Including Caffeine. ",
        price: 9.99,
        pc: 1,
      },
      {
        id: "j5",
        type: "juice",
        name: "Slim 1L",
        img: "https://superetti.dz/wp-content/uploads/2020/08/4253.jpg",
        description:
          "Slim 1L Carbonated Water, Sugar, Colour (Caramel E150d), Phosphoric Acid, Natural Flavourings Including Caffeine. ",
        price: 9.99,
        pc: 1,
      },
      {
        id: "j6",
        type: "juice",
        name: "Sprite 1L",
        img: "https://thumbs.dreamstime.com/b/gomel-belarus-february-drink-sprite-plastic-bottle-black-background-86222661.jpg",
        description:
          "Sprite 1L Carbonated Water, Sugar, Colour (Caramel E150d), Phosphoric Acid, Natural Flavourings Including Caffeine. ",
        price: 9.99,
        pc: 1,
      },
    ],

    cart: stateCart.items,
    totPrice: stateCart.totPrice,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    resetCart: resetCartHandler,
  };

  return (
    <FastFoodContext.Provider value={contextValues}>
      {props.children}
    </FastFoodContext.Provider>
  );
};

export default ContextProvider;
