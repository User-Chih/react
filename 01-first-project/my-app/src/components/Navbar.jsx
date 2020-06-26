import React from "react";
import s from "./Navbar.module.css";


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={`${s.profile} ${s.item}`}>
        <a href="http://">Profile</a>
    </div>
        <div className={`${s.messages} ${s.item}`}>
            <a href="http://">Messages</a>
    </div>
        <div className={`${s.news} ${s.item}`}>
            <a href="http://">News</a>
    </div>
        <div className={`${s.music} ${s.item}`}>
            <a href="http://">Music</a>
        </div>
        <div className={s.line}><span></span></div>
        <div className={`${s.settings} ${s.item}`}>
            <a href="http://">Settings</a>
    </div>
</nav>
}

export default Navbar;