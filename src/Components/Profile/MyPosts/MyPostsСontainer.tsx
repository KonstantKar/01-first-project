import React, { useRef } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { useDispatch, useSelector } from "react-redux";
import {
  addPost,
  deletePost,
  updateNewPostText,
} from "../../../Redux/profileReducer";
import { RootState } from "../../../Redux/redux-store";

const MyPostsContainer: React.FC = () => {
  const dispatch = useDispatch();
  const postData = useSelector((state: RootState) => state.profile.postData);
  const newPostText = useSelector(
    (state: RootState) => state.profile.newPostText
  );
  let postElement = postData.map((el) => {
    return (
      <Post
        key={el.id}
        message={el.message}
        like={el.likes}
        deletePost={() => dispatch(deletePost(el.id))}
      />
    );
  });

  let onAddPost = () => {
    dispatch(addPost());
  };

  let newPostTextArea = useRef<HTMLTextAreaElement>(null);

  let onPostChange = () => {
    let text = newPostTextArea.current!.value;
    dispatch(updateNewPostText(text));
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
