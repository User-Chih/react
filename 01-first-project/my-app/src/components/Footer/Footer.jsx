import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <img
        className={s.img}
        src="https://i.ibb.co/Fxwk7gG/jsx-logo.png"
        alt=""
      />
    </footer>
  );
};

export default Footer;
