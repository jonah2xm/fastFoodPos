import React, { useState } from "react";
import styles from "./Header.module.css";
const Header = () => {
  const [activeHeader, setActiveHeader] = useState({
    home: false,
    menu: true,
    history: false,
    states: false,
    settings: false,
    logout: false,
  });
  const headerHandler = (event) => {
    console.log(activeHeader);
    console.log("event=", event.target.id);
    switch (event.target.id) {
      case "home":
        setActiveHeader(() => {
          return {
            home: true,
            menu: false,
            history: false,
            states: false,
            settings: false,
            logout: false,
          };
        });
        break;
      case "menu":
        console.log("menu");
        setActiveHeader(() => {
          return {
            home: false,
            menu: true,
            history: false,
            states: false,
            settings: false,
            logout: false,
          };
        });
        break;
      case "history":
        console.log("im here");
        setActiveHeader(() => {
          return {
            home: false,
            menu: false,
            history: true,
            states: false,
            settings: false,
            logout: false,
          };
        });
        break;
      case "states":
        setActiveHeader(() => {
          return {
            home: false,
            menu: false,
            history: false,
            states: true,
            settings: false,
            logout: false,
          };
        });
        break;
      case "settings":
        setActiveHeader(() => {
          return {
            home: false,
            menu: false,
            history: false,
            states: false,
            settings: true,
            logout: false,
          };
        });
        break;
      case "logout":
        setActiveHeader(() => {
          return {
            home: false,
            menu: false,
            history: false,
            states: false,
            settings: false,
            logout: true,
          };
        });
        break;

      default:
        break;
    }
  };
  return (
    <React.Fragment>
      <div className={styles.header}>
        <ul className={styles.header1}>
          <li>
            <img
              className={styles.mainLogo}
              src={require("../Pictures/MainHeaderIcon/fastFoodLogo.png")}
              alt="mainlogo"
            ></img>
          </li>
          <li
            onClick={headerHandler}
            id="home"
            className={`${styles.liMenu} ${
              activeHeader.home === true ? styles.foodMenu : ""
            }`}
          >
            <div className={styles.curve_up}></div>
            <img
              id="home"
              className={styles.menu}
              src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
              alt="home"
            ></img>
            <h3>Home</h3>
            <div className={styles.curve_down}></div>
          </li>
          <li
            onClick={headerHandler}
            id="menu"
            className={`${styles.liMenu} ${
              activeHeader.menu === true ? styles.foodMenu : ""
            }`}
          >
            <div className={styles.curve_up}></div>
            <img
              id="menu"
              className={styles.menu}
              src={require("../Pictures/MainHeaderIcon/grid.png")}
              alt="menu"
            ></img>
            <h3>Menu</h3>
            <div className={styles.curve_down}></div>
          </li>

          <li
            onClick={headerHandler}
            id="history"
            className={`${styles.liMenu} ${
              activeHeader.history === true ? styles.history : ""
            }`}
          >
            <div className={styles.curve_up}></div>
            <img
              id="history"
              className={styles.menu}
              src={require("../Pictures/MainHeaderIcon/history.png")}
              alt="history"
            ></img>
            <div className={styles.curve_down}></div>
            <h3>Transactions</h3>
          </li>

          <li
            onClick={headerHandler}
            id="states"
            className={`${styles.liMenu} ${
              activeHeader.states === true ? styles.states : ""
            }`}
          >
            <div className={styles.curve_up}></div>
            <img
              id="states"
              onClick={headerHandler}
              className={styles.menu}
              src={require("../Pictures/MainHeaderIcon/pie-graph.png")}
              alt="stats"
            ></img>
            <h3>Repports</h3>
            <div className={styles.curve_down}></div>
          </li>
        </ul>
        <ul className={styles.header1}>
          <li
            onClick={headerHandler}
            id="settings"
            className={`${styles.liMenu} ${
              activeHeader.settings === true ? styles.settings : ""
            }`}
          >
            <div className={styles.curve_up}></div>
            <img
              id="settings"
              className={styles.menu}
              src={require("../Pictures/MainHeaderIcon/settings.png")}
              alt="settings"
            ></img>
            <h3>Settings</h3>
            <div className={styles.curve_down}></div>
          </li>

          <li
            onClick={headerHandler}
            id="logout"
            className={`${styles.liMenu} ${
              activeHeader.logout === true ? styles.logout : ""
            }`}
          >
            <div className={styles.curve_up}></div>
            <img
              id="logout"
              className={styles.menu}
              src={require("../Pictures/MainHeaderIcon/logout.png")}
              alt="logout"
            ></img>
            <div className={styles.curve_down}></div>
          </li>
          <li className={styles.curve_down}></li>
        </ul>
      </div>
    </React.Fragment>
  );
};
export default Header;
