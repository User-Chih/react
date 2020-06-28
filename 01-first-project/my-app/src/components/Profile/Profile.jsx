import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.profile_wrapper}>
      <div className={s.profile}>        
        <div className="ava">AVA</div>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
