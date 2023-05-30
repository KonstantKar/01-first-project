import React from "react";
import s from "./MusicComp.module.css";

const MusicComp = (props) => {
  let addSong = () => {
    props.addSong(props.id);
  };
  let deleteSong = () => {
    props.deleteSong(props.id);
  };
  return (
    <div className={s.musicContainer}>
      <div className={s.songName}>{props.songName}</div>
      <div className={s.artistName}>{props.artist}</div>
      <div className={s.buttonContainer}>
        {props.followed ? (
          <button
            className={`${s.button} ${s.deleteSong}`}
            onClick={deleteSong}
          >
            Удалить песню
          </button>
        ) : (
          <button className={`${s.button} ${s.addSong}`} onClick={addSong}>
            Добавить песню
          </button>
        )}
      </div>
    </div>
  );
};

export default MusicComp;
