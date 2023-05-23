import React from "react";
import s from "./Loader.module.css";

const ProfileLoader = () => {
  return (
    <div>
      <div className={s.loader}>
        <div className={s.label}>
          Выберите профиль в "Users" для прогрузки профиля
        </div>
        <div className={s.spinner}></div>
      </div>
    </div>
  );
};

export default ProfileLoader;
