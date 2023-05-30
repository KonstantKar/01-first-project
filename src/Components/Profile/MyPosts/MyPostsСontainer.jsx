import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { useDispatch, useSelector } from "react-redux";
import {
  addPostActionCreator,
  deletePostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../Redux/profileReducer";

const MyPostsContainer = () => {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.profile.postData);
  const newPostText = useSelector((state) => state.profile.newPostText);
  let postElement = postData.map((el) => {
    return (
      <Post
        key={el.id}
        id={el.id}
        message={el.message}
        like={el.likes}
        deletePost={() => dispatch(deletePostActionCreator(el.id))}
      />
    );
  });
  let onAddPost = () => {
    dispatch(addPostActionCreator());
  };

  let newPostTextArea = React.createRef();

  let onPostChange = () => {
    let text = newPostTextArea.current.value;
    dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={s.postsBlock}>
      <h2>My post</h2>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostTextArea}
            value={newPostText}
          />
        </div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
};

export default MyPostsContainer;
