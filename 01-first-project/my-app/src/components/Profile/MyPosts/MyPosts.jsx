import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postData = [
    { id: 1, message: "Hi,how are you?", likesCount: 1285 },
    { id: 2, message: "It's my first post", likesCount: 17 },
  ];
  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div className={s.enterPost}>
        <div className={s.enterText}>
          <textarea placeholder="Новый пост..."></textarea>
        </div>
        <button className={s.enterButton}>Add post</button>
      </div>
      <div className={s.posts}>
        <Post
          message={postData[0].message}
          likesCount={postData[0].likesCount}
        />
        <Post
          message={postData[1].message}
          likesCount={postData[1].likesCount}
        />
      </div>
    </div>
  );
};

export default MyPosts;
