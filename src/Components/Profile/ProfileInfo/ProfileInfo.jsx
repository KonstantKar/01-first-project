import React from "react";
import userPhoto from "../../../assets/images/ava.png";
import Loader from "../../Users/Loader/Loader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />;
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
          src={
            props.profile.photos.large != null
              ? props.profile.photos.large
              : userPhoto
          }
          alt="profile"
        />
        <div className={s.descriptionBlock}>
          <div className={s.fullName}>{props.profile.fullName}</div>
          <div className={s.aboutMe}>{props.profile.aboutMe}</div>
          <div className={s.contacts}>
            <span>
              <img
                src="https://image.flaticon.com/icons/png/512/174/174848.png"
                alt="facebook"
              />
              {props.profile.contacts.facebook}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
