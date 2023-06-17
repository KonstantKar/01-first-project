import s from "./Profile.module.css";
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsСontainer";

export interface ProfileProps {
  isOwner: boolean;
}

const Profile: React.FC<ProfileProps> = (props) => {
  return (
    <div>
      <ProfileInfo isOwner={props.isOwner} />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
