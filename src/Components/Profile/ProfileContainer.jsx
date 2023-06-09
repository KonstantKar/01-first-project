import { getProfileTC, getStatusTC } from "../../Redux/profileReducer";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuth);
  const authenticatedUserId = useSelector((state) => state.auth.data.id);

  const getProfile = () => {
    dispatch(getProfileTC(userId));
  };

  const getUsersStatus = () => {
    dispatch(getStatusTC(userId));
  };

  useEffect(() => {
    getProfile(userId);
    getUsersStatus(userId);
  }, [userId]);

  return <Profile isOwner={userId === String(authenticatedUserId)} />;
};

export default ProfileContainer;
