import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import { useDispatch, useSelector } from "react-redux";
const MyPostsContainer = () => {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.profile.postData);
  const newPostText = useSelector((state) => state.profile.newPostText);
  let addPost = () => {
    dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    const action = updateNewPostTextActionCreator(text);
    dispatch(action);
  };
  return (
    <MyPosts
      addPost={addPost}
      updateNewPostText={onPostChange}
      postData={postData}
      newPostText={newPostText}
    />
  );
};
export default MyPostsContainer;
