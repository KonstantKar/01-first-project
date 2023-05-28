import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPosts
        addPost={props.addPost}
        deletePost={props.deletePost}
        updateNewPostText={props.updateNewPostText}
        postData={props.postData}
        newPostText={props.newPostText}
      />
    </div>
  );
};
export default Profile;
