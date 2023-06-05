import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong, deleteSong } from "../../Redux/musicReducer";
import Music from "./Music";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

const MusicContainer = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.music.songs);
  const isAuth = useSelector((state) => state.auth.isAuth);

  const addSongToStore = (songID) => {
    dispatch(addSong(songID));
  };

  const deleteSongFromStore = (songID) => {
    dispatch(deleteSong(songID));
  };

  return (
    <PrivateRoute isAuth={isAuth} fallback={"/Login"}>
      <Music
        addSong={addSongToStore}
        deleteSong={deleteSongFromStore}
        songs={songs}
      />
    </PrivateRoute>
  );
};

export default MusicContainer;
