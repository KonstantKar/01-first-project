import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="http://cdn.vole.io/user/118935/3d328209-f2d9-4ca6-90db-026dd7c3ba6c.jpg"
        alt="error"
      ></img>
      {props.message}
      <div>
        <span>{props.like} likes</span>
      </div>
    </div>
  );
};
export default Post;
