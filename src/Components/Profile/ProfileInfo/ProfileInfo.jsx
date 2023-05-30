import React from "react";
import userPhoto from "../../../assets/images/ava.png";
import s from "./ProfileInfo.module.css";
import ProfileLoader from "../../Loader/ProfileLoader";
import ProfileStatus from "./ProfileStatus";
import { useSelector } from "react-redux";

const ProfileInfo = () => {
  const profile = useSelector((state) => state.profile.profile);
  if (!profile) {
    return <ProfileLoader />;
  }

  return (
    <div>
      <div>
        <img
          className={s.background}
          src="https://w-dog.ru/wallpapers/1/18/460185152938246/most-v-gorode-nyu-jork.jpg"
          alt="error"
        />
      </div>
      <div className={s.container}>
        <img
          className={s.ava}
          src={profile.photos.large != null ? profile.photos.large : userPhoto}
          alt="profile"
        />
        <div className={s.descriptionBlock}>
          <div className={s.fullName}>{profile.fullName}</div>
          <div className={s.aboutMe}>{profile.aboutMe}</div>
          <div className={s.contacts}>
            <span>
              <img
                src="https://image.flaticon.com/icons/png/512/174/174848.png"
                alt="facebook"
              />
              {profile.contacts.facebook}
            </span>
            <div>
              <ProfileStatus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
