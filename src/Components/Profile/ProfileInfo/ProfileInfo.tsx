import React, { useState } from "react";
import userPhoto from "../../../assets/images/ava.png";
import s from "./ProfileInfo.module.css";
import ProfileLoader from "../../Loader/ProfileLoader";
import ProfileStatus from "./ProfileStatus";
import { useDispatch, useSelector } from "react-redux";
import { safePhoto } from "../../../Redux/profileReducer";
import ProfileDataForm from "./ProfileDataForm";
import { ProfileProps } from "../Profile";
import { RootState } from "../../../Redux/redux-store";

export interface ContactProps {
  contactTitle: string;
  contactValue: string;
}

interface ProfileDataProps {
  profile: any;
  isOwner: boolean;
  setEditMode: any;
}

const ProfileInfo: React.FC<ProfileProps> = (props) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const profile = useSelector((state: RootState) => state.profile.profile);
  const onMainPhotoSelected = (e: any) => {
    dispatch<any>(safePhoto(e.target.files[0]));
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
        <ProfileDataForm
          profile={profile}
          Contact={Contact}
          setEditMode={setEditMode}
        />
      ) : (
        <ProfileData
          profile={profile}
          isOwner={props.isOwner}
          setEditMode={setEditMode}
        />
      )}
      <div>
        <b>Статус</b>
        <ProfileStatus />
      </div>
    </div>
  );
};

const ProfileData: React.FC<ProfileDataProps> = ({
  profile,
  isOwner,
  setEditMode,
}) => {
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
            <b>Знания и умения</b>:{profile.lookingForAJobDescription}
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
          {isOwner && (
            <button onClick={() => setEditMode(true)}>
              Сменить информацию
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export const Contact: React.FC<ContactProps> = ({
  contactTitle,
  contactValue,
}) => {
  return (
    <div>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
