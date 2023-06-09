import React, { useState } from "react";
import userPhoto from "../../../assets/images/ava.png";
import s from "./ProfileInfo.module.css";
import ProfileLoader from "../../Loader/ProfileLoader";
import ProfileStatus from "./ProfileStatus";
import { useDispatch, useSelector } from "react-redux";
import { safePhoto } from "../../../Redux/profileReducer";

const ProfileInfo = (props) => {
  const dispatch = useDispatch();
  const [editMode] = useState(false);
  const profile = useSelector((state) => state.profile.profile);
  const onMainPhotoSelected = (e) => {
    dispatch(safePhoto(e.target.files[0]));
  };
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
        <img
          className={s.ava}
          src={profile.photos.large || userPhoto}
          alt="profile"
        />
      </div>
      {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
      {editMode ? (
        <ProfileDataForm profile={profile} />
      ) : (
        <ProfileData profile={profile} />
      )}
      <div>
        <b>Статус</b>
        <ProfileStatus />
      </div>
    </div>
  );
};

const ProfileData = ({ profile }) => {
  return (
    <div className={s.container}>
      <div className={s.descriptionBlock}>
        <div className={s.fullName}>{profile.fullName}</div>
        <div className={s.aboutMe}>
          <b>Обо мне</b>:{profile.aboutMe}
        </div>
        <div className={s.aboutMe}>
          <b>Ищу работу?</b>:{profile.lookingForAJob ? "да" : "нет"}
        </div>
        {profile.lookingForAJob && (
          <div className={s.aboutMe}>
            <b>Знания и умения</b>:{profile.lookingForAJob ? "да" : "нет"}
          </div>
        )}
        <div className={s.contacts}>
          <b>Контакты</b>:
          {Object.keys(profile.contacts).map((key) => {
            return (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={
                  profile.contacts.hasOwnProperty(key)
                    ? profile.contacts[key]
                    : ""
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ProfileDataForm = ({ profile }) => {
  return (
    <div className={s.container}>
      <div className={s.descriptionBlock}>
        <div className={s.fullName}>{profile.fullName}</div>
        <div className={s.aboutMe}>
          <b>Обо мне</b>:{profile.aboutMe}
        </div>
        <div className={s.aboutMe}>
          <b>Ищу работу?</b>:{profile.lookingForAJob ? "да" : "нет"}
        </div>
        {profile.lookingForAJob && (
          <div className={s.aboutMe}>
            <b>Знания и умения</b>:{profile.lookingForAJob ? "да" : "нет"}
          </div>
        )}
        <div className={s.contacts}>
          <b>Контакты</b>:
          {Object.keys(profile.contacts).map((key) => {
            return (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={
                  profile.contacts.hasOwnProperty(key)
                    ? profile.contacts[key]
                    : ""
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
