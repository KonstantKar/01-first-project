import {
  addPostActionCreator,
  setProfileAC,
  updateNewPostTextActionCreator,
} from "../../Redux/profileReducer";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.profile.postData);
  const newPostText = useSelector((state) => state.profile.newPostText);
  const profile = useSelector((state) => state.profile.profile);
  const { userId } = useParams();

  let addPost = () => {
    dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    const action = updateNewPostTextActionCreator(text);
    dispatch(action);
  };

  const setProfile = (loadProfile) => {
    dispatch(setProfileAC(loadProfile));
  };

  const getProfile = () => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        setProfile(response.data);
      });
  };

  useEffect(() => {
    getProfile();
  }, []); // Обновление профиля при изменении значения параметра

  return (
    <div>
      <Profile
        profile={profile}
        addPost={addPost}
        updateNewPostText={onPostChange}
        postData={postData}
        newPostText={newPostText}
      />
    </div>
  );
};

export default ProfileContainer;
