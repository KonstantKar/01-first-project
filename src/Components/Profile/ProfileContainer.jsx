import {
  addPostActionCreator,
  setProfileAC,
  updateNewPostTextActionCreator,
} from "../../Redux/profileReducer";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import { useEffect } from "react";

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.profile.postData);
  const newPostText = useSelector((state) => state.profile.newPostText);
  const profile = useSelector((state) => state.profile.profile);
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
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        setProfile(response.data);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

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
