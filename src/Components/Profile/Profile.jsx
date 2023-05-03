import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        postData={props.state.postData}
        newPostText={props.state.newPostText}
        addPost={props.addPost}
        updateNewPostChange={props.updateNewPostChange}
      />
    </div>
  );
};
export default Profile;
