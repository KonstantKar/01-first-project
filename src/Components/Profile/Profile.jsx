import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsСontainer";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo isOwner={props.isOwner} />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
