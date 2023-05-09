import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
const MyPosts = (props) => {
  let postElement = props.postData.map((el) => {
    return <Post id={el.id} message={el.message} like={el.likes} />;
  });

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
    //То что ниже мы засунули в контейнер
    // props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    //То что ниже мы засунули в контейнер
    //let action = updateNewPostTextActionCreator(text);
    //props.dispatch(action);
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
        <button onClick={onAddPost}>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
};
export default MyPosts;
