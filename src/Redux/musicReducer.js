import produce from "immer";

const ADD_SONG = "ADD-SONG";
const DEL_SONG = "DEL-SONG";

let initialState = {
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

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG:
      return produce(state, (draftState) => {
        const song = draftState.songs.find((song) => song.id === action.songID);
        if (song) {
          song.followed = true;
        }
      });
    case DEL_SONG:
      return produce(state, (draftState) => {
        const song = draftState.songs.find((song) => song.id === action.songID);
        if (song) {
          song.followed = false;
        }
      });
    default:
      return state;
  }
};

export const addSongAC = (userID) => {
  return {
    type: ADD_SONG,
    songID: userID,
  };
};

export const deleteSongAC = (userID) => {
  return {
    type: DEL_SONG,
    songID: userID,
  };
};

export default musicReducer;
