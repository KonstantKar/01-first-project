import React from "react";
import s from "./Post.module.css";

interface PostProps {
  like: number | string;
  message: string;
  deletePost(): void;
}

const Post: React.FC<PostProps> = (props) => {
  return (
    <div className={s.item}>
      <img
        src="http://cdn.vole.io/user/118935/3d328209-f2d9-4ca6-90db-026dd7c3ba6c.jpg"
        alt="error"
      />
      <p>{props.message}</p>
      <div>
        <span className={s.likes}>{props.like} likes</span>
        <button className={s.deleteButton} onClick={props.deletePost}>
          Delete Post
        </button>
      </div>
    </div>
  );
};

export default Post;
