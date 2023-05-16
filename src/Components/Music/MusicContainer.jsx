import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSongAC, deleteSongAC } from "../../Redux/musicReducer";
import Music from "./Music";

const MusicContainer = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.music.songs);

  const addSong = (songID) => {
    dispatch(addSongAC(songID));
  };

  const deleteSong = (songID) => {
    dispatch(deleteSongAC(songID));
  };

  return <Music addSong={addSong} deleteSong={deleteSong} songs={songs} />;
};

export default MusicContainer;
