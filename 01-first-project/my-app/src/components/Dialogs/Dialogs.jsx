import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  // {/* {конкотинируем строки to и props.id} */}
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      {/* {Собием путь ссылки, id и имя } */}
      <NavLink to={path}> {props.name} </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Паша" },
    { id: 2, name: "Ника" },
    { id: 3, name: "Ваня" },
    { id: 4, name: "Саша" },
    { id: 5, name: "Оля" },
  ];
  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hi, yo" },
    { id: 3, message: "Hi, yo" },
    { id: 4, message: "hi" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Yo" }
  ];
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {/* {name и id сидят в props} */}
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />

        {/* <div className={s.dialog}>
          <NavLink to="/dialogs/2" id="2">Ника</NavLink>
          </div> */}
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
        <Message message={messagesData[4].message} />
        <Message message={messagesData[5].message} />
        {/* <div className={s.dialog}>Yo</div> */}
      </div>
    </div>
  );
};

export default Dialogs;
