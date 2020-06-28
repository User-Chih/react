import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post messege="Hi,how are you?" like="like 5" />
        <Post messege="It's my first post" like="like 10"  />
      </div>
    </div>
  );
};

export default MyPosts;
