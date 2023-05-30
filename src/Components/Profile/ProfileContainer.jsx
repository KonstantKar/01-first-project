import { getProfileTC, getStatusTC } from "../../Redux/profileReducer";
import { useDispatch } from "react-redux";
import Profile from "./Profile";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const getProfile = () => {
    dispatch(getProfileTC(userId));
  };

  const getUsersStatus = () => {
    dispatch(getStatusTC(userId));
  };

  useEffect(() => {
    getProfile();
  }, [userId]); // Обновление профиля при изменении значения параметра

  useEffect(() => {
    getUsersStatus();
  }, [userId]); // Обновление статуса при изменении значения параметра

  return <Profile />;
};

export default ProfileContainer;
