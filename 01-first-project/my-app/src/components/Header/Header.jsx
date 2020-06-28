import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        className={s.img_logo}
        src="https://i.ibb.co/wRnDLQQ/4-2-globe-png-file.png"
        alt=""
      />
    </header>
  );
};

export default Header;
