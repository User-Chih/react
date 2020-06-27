import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        className={s.img}
        src="https://i.ibb.co/r0DMyY7/anime-eyes-and-blush-11550227123oqpu8qjqgc.png"
        alt=""/>
      <img
        className={s.img}
        src="https://i.ibb.co/Fxwk7gG/jsx-logo.png"
        alt=""/>
    </header>
  );
};

export default Header;
