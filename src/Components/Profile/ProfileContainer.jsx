import {
  addPostActionCreator,
  deletePostActionCreator,
  getProfileTC,
  setProfileAC,
  updateNewPostTextActionCreator,
} from "../../Redux/profileReducer";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.profile.postData);
  const newPostText = useSelector((state) => state.profile.newPostText);
  const profile = useSelector((state) => state.profile.profile);
  const idToDelete = useSelector((state) => state.profile.postData[0].id);
  const isAuth = useSelector((state) => state.auth.isAuth);

  const { userId } = useParams();

  let addPost = () => {
    dispatch(addPostActionCreator());
  };

  let deletePost = () => {
    dispatch(deletePostActionCreator(idToDelete));
  };

  let onPostChange = (text) => {
    const action = updateNewPostTextActionCreator(text);
    dispatch(action);
  };

  //Так было до добавления thunk-creator-a
  /* const setProfile = (loadProfile) => {
    dispatch(setProfileAC(loadProfile));
  };

  const getAuthProfile = () => {
    profileAPI.getAxiosProfile(userId).then((data) => {
      setProfile(data);
    });
  }; */

  const getProfile = () => {
    dispatch(getProfileTC(userId));
  };

  useEffect(() => {
    getProfile();
  }, []); // Обновление профиля при изменении значения параметра

  if (isAuth === false) return <Navigate to={"/Login"} />;

  return (
    <div>
      <Profile
        profile={profile}
        addPost={addPost}
        deletePost={deletePost}
        updateNewPostText={onPostChange}
        postData={postData}
        newPostText={newPostText}
      />
    </div>
  );
};

export default ProfileContainer;
