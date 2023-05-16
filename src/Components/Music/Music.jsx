import s from "./Music.module.css";
import React from "react";
import MusicComp from "./MusicComp/MusicComp";
const Music = (props) => {
  let musicElements = props.songs.map((el) => {
    return (
      <MusicComp
        id={el.id}
        songName={el.songName}
        artist={el.artist}
        followed={el.followed}
        addSong={props.addSong}
        deleteSong={props.deleteSong}
      />
    );
  });
  return <div>{musicElements}</div>;
};
export default Music;
