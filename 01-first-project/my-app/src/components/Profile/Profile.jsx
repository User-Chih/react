import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      {" "}
      {/* <div>
            <img src="https://i.ibb.co/VQdtDJb/jsxpng.png" alt="" />
        </div> */}
      <div className="ava">AVA</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
