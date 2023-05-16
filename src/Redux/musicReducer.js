import produce from "immer";

const ADDSONG = "ADDSONG";
const DELSONG = "DELSONG";

let initialState = {
  songs: [
    {
      id: 1,
      songName: "врейкинболл",
      artist: "idn",
      followed: false,
    },
    {
      id: 2,
      songName: "Триллион черных роз",
      artist: "Алла Пугачиха",
      followed: true,
    },
    {
      id: 3,
      songName: "врейкинболл",
      artist: "idn",
      followed: true,
    },
    {
      id: 4,
      songName: "врейкинболл",
      artist: "idn",
      followed: false,
    },
    {
      id: 5,
      songName: "врейкинболл",
      artist: "idn",
      followed: true,
    },
    {
      id: 6,
      songName: "врейкинболл",
      artist: "idn",
      followed: true,
    },
  ],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDSONG:
      return produce(state, (draftState) => {
        const song = draftState.songs.find((song) => song.id === action.songID);
        if (song) {
          song.followed = true;
        }
      });
    case DELSONG:
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
    type: ADDSONG,
    songID: userID,
  };
};

export const deleteSongAC = (userID) => {
  return {
    type: DELSONG,
    songID: userID,
  };
};

export default musicReducer;
