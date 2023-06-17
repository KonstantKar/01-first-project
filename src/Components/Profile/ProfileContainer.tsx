import React from "react";
import { getProfileTC, getStatusTC } from "../../Redux/profileReducer";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RootState } from "../../Redux/redux-store";

const ProfileContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const authenticatedUserId = useSelector(
    (state: RootState) => state.auth.data.id
  );

  const getProfile = () => {
    dispatch<any>(getProfileTC(userId));
  };

  const getUsersStatus = () => {
    dispatch<any>(getStatusTC(userId));
  };

  useEffect(() => {
    getProfile();
    getUsersStatus();
  }, [userId]);

  return <Profile isOwner={userId === String(authenticatedUserId)} />;
};

export default ProfileContainer;
