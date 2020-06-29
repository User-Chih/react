import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = () => {
  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div className={s.enterPost}>
        <div className={s.enterText}>
          <textarea
            placeholder="Новый пост..."
          ></textarea>
        </div>
        <button className={s.enterButton}>Add post</button>
      </div>
      <div className={s.posts}>
        <Post messege="Hi,how are you?" likesCount="5" />
        <Post messege="It's my first post" likesCount="10" />
      </div>
    </div>
  );
};

export default MyPosts;
