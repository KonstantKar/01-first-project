import s from "./Music.module.css";
import React from "react";
import MusicComp from "./MusicComp/MusicComp";
import { useDispatch, useSelector } from "react-redux";
import { addSong, deleteSong } from "../../Redux/musicReducer";
import { RootState } from "../../Redux/redux-store";
const Music: React.FC = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state: RootState) => state.music.songs);

  const addSongToPlaylist = (songID: number) => {
    dispatch(addSong(songID));
  };

  const deleteSongFromPlaylist = (songID: number) => {
    dispatch(deleteSong(songID));
  };

  let musicElements = songs.map((el) => {
    return (
      <MusicComp
        id={el.id}
        songName={el.songName}
        artist={el.artist}
        followed={el.followed}
        addSong={addSongToPlaylist}
        deleteSong={deleteSongFromPlaylist}
      />
    );
  });
  return <div>{musicElements}</div>;
};
export default Music;
