import { createSlice } from "@reduxjs/toolkit";
import { followAPI, unFollowAPI } from "../API/api";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    hideButton: false,
  },
  reducers: {
    follow: (state, action) => {
      const user = state.users.find((user) => user.id === action.payload);
      if (user) {
        user.followed = true;
      }
    },
    unfollow: (state, action) => {
      const user = state.users.find((user) => user.id === action.payload);
      if (user) {
        user.followed = false;
      }
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setCurrentPages: (state, action) => {
      state.currentPage = action.payload;
    },
    setHideButton: (state, action) => {
      state.hideButton = action.payload;
    },
  },
});

export const { follow, unfollow, setUsers, setCurrentPages, setHideButton } =
  usersSlice.actions;

export const followTC = (id) => {
  return (dispatch) => {
    followAPI.getAxiosFollow(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(follow(id));
      }
    });
  };
};

export const unFollowTC = (id) => {
  return (dispatch) => {
    unFollowAPI.getAxiosUnfollow(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollow(id));
      }
    });
  };
};

export default usersSlice.reducer;
