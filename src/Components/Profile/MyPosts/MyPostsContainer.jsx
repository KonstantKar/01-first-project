import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../Redux/profileReducer";
import React from "react";
import MyPosts from "./MyPosts";
const MyPostsContainer = (props) => {
  let state = props.store.getState();
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };
  return (
    <MyPosts
      addPost={addPost}
      updateNewPostText={onPostChange}
      postData={state.profile.postData}
      newPostText={state.profile.newPostText}
    />
  );
};
export default MyPostsContainer;
