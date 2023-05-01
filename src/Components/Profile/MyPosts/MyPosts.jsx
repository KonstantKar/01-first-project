import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElement = props.postData.map((el) => {
    return <Post id={el.id} message={el.message} like={el.likes} />;
  });
  return (
    <div className={s.postsBlock}>
      <h2>My post</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
};
export default MyPosts;
