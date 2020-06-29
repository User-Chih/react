import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
  // {/* {конкотинируем строки to и props.id} */}
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + ' ' + s.active}>
      {/* {Собием путь ссылки, id и имя } */}
      <NavLink to={path}> {props.name} </NavLink>
    </div>);
}

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {/* {name и id сидят в props} */}
        <DialogItem name="Паша" id="1" />
        <DialogItem name="Ника" id="2" />
        <DialogItem name="Ваня" id="3" />
        <DialogItem name="Саша" id="4" />
        <DialogItem name="Оля" id="5" />

        {/* <div className={s.dialog}>
          <NavLink to="/dialogs/2" id="2">Ника</NavLink>
          </div> */}
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="Hi, Yo" />
        <Message message="Hi, Yo" />
        <Message message="Hi" />
        <Message message="Yo" />
        <Message message="Yo" />
        {/* <div className={s.dialog}>Yo</div> */}
      </div>
    </div>
  );
};

export default Dialogs;
