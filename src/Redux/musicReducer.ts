import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { musicState } from "./types";

const initialState: musicState = {
  songs: [
    {
      id: 1,
      songName: "Kickstart My Heart",
      artist: "Mötley Crüe",
      followed: false,
    },
    {
      id: 2,
      songName: "Take My Breath Away",
      artist: "Berlin",
      followed: false,
    },
    {
      id: 3,
      songName: "(I Just) Died In Your Arms",
      artist: "Cutting Crew",
      followed: false,
    },
    {
      id: 4,
      songName: "Rock You Like a Hurricane",
      artist: "Scorpions",
      followed: false,
    },
    {
      id: 5,
      songName: "Hold the Line",
      artist: "Toto",
      followed: false,
    },
    {
      id: 6,
      songName: "Out of Touch",
      artist: "Daryl Hall & John Oates",
      followed: false,
    },
  ],
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    addSong: (state, action: PayloadAction<number>) => {
      const song = state.songs.find((song) => song.id === action.payload);
      if (song) {
        song.followed = true;
      }
    },
    deleteSong: (state, action: PayloadAction<number>) => {
      const song = state.songs.find((song) => song.id === action.payload);
      if (song) {
        song.followed = false;
      }
    },
  },
});

export const { addSong, deleteSong } = musicSlice.actions;

export default musicSlice.reducer;
