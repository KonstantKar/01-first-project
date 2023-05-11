import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../Redux/profileReducer";
import React, { useContext } from "react";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";
const MyPostsContainer = () => {
  const store = useContext(StoreContext);
  let state = store.getState();
  let addPost = () => {
    store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    store.dispatch(action);
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
