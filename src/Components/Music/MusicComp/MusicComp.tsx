import React from "react";
import s from "./MusicComp.module.css";

interface MusicCompProps {
  id: number;
  songName: string;
  artist: string;
  followed: boolean;
  addSong: (songID: number) => void;
  deleteSong: (songID: number) => void;
}

const MusicComp: React.FC<MusicCompProps> = (props) => {
  const addSong = () => {
    props.addSong(props.id);
  };

  const deleteSong = () => {
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
