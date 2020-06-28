import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        className={s.img}
        src="https://i.ibb.co/r0DMyY7/anime-eyes-and-blush-11550227123oqpu8qjqgc.png"
        alt=""
      />{" "}
      {props.messege}
      <div className={s.like}>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
