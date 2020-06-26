import React from "react";
import s from "./Profile.module.css";


const Profile = () => {
    return <div className={s.content}>
        {" "}
        {/* <div>
            <img src="https://i.ibb.co/VQdtDJb/jsxpng.png" alt="" />
        </div> */}
        <div className="ava">AVA</div>
        <div className="posts">My posts
         <div className="post">New post</div>
            <div>
                <div>Post 1</div>
                <div>Post 2</div>
            </div>
        </div>
    </div>
}

export default Profile;