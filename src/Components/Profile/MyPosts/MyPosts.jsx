import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
const MyPosts = (props) => {
  let postElement = props.postData.map((el) => {
    return <Post id={el.id} message={el.message} like={el.likes} />;
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: "ADD-POST" });
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: "ADD-NEW-POST-TEXT", newText: text });
  };
  return (
    <div className={s.postsBlock}>
      <h2>My post</h2>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          ></textarea>
        </div>
        <button onClick={addPost}>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
};
export default MyPosts;
