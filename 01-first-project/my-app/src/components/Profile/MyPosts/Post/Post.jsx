import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img
        className={s.img}
        src="https://i.ibb.co/r0DMyY7/anime-eyes-and-blush-11550227123oqpu8qjqgc.png"
        alt=""
      />{" "}
      Post 1
          <div><span>like</span></div>
    </div>
  );
};

export default Post;
