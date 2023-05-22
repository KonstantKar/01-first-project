import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="http://cdn.vole.io/user/118935/3d328209-f2d9-4ca6-90db-026dd7c3ba6c.jpg"
        alt="error"
      />
      <p>{props.message}</p>
      <div>
        <span className={s.likes}>{props.like} likes</span>
      </div>
    </div>
  );
};

export default Post;
