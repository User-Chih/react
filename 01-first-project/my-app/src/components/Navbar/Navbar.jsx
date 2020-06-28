import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
      <nav className={s.nav}>
        <div className={`${s.profile} ${s.item}`}>
          {/*добавляем activeClassName из-за трансформации классов для стилизации в css*/}
          <NavLink to="/profile" activeClassName={s.active}>
            Profile
          </NavLink>
        </div>
        <div className={`${s.messages} ${s.item}`}>
          <NavLink to="/dialogs" activeClassName={s.active}>
            Messages
          </NavLink>
        </div>
        <div className={`${s.news} ${s.item}`}>
          <NavLink to="/news" activeClassName={s.active}>
            News
          </NavLink>
        </div>
        <div className={`${s.music} ${s.item}`}>
          <NavLink to="/music" activeClassName={s.active}>
            Music
          </NavLink>
        </div>
        <div className={s.line}>
          {/*разделяющая линия*/}
          <span></span>
        </div>
        <div className={`${s.settings} ${s.item}`}>
          <NavLink to="/settings" activeClassName={s.active}>
            Settings
          </NavLink>
        </div>
      </nav>
    );
}

export default Navbar;