import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
        <div className={s.dialog + " " + s.active}>Паша</div>
        <div className={s.dialog}>Ваня</div>
        <div className={s.dialog}>Ника</div>
        <div className={s.dialog}>Саша</div>
        <div className={s.dialog}>Оля</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Hi, Yo</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
