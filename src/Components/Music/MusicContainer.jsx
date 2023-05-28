import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSongAC, deleteSongAC } from "../../Redux/musicReducer";
import Music from "./Music";
import { Navigate } from "react-router-dom";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

const MusicContainer = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.music.songs);
  const isAuth = useSelector((state) => state.auth.isAuth);

  const addSong = (songID) => {
    dispatch(addSongAC(songID));
  };

  const deleteSong = (songID) => {
    dispatch(deleteSongAC(songID));
  };

  return (
    <PrivateRoute isAuth={isAuth} fallback={"/Login"}>
      <Music addSong={addSong} deleteSong={deleteSong} songs={songs} />
    </PrivateRoute>
  );
};

export default MusicContainer;
