import { createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { followAPI, unFollowAPI } from "../API/api";
import { UsersState } from "./types";

const initialState: UsersState = {
  users: [],
  hideButton: false,
  currentPage: 1,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    follow: (state, action: PayloadAction<number>) => {
      const user = state.users.find((user) => user.id === action.payload);
      if (user) {
        user.followed = true;
      }
    },
    unfollow: (state, action: PayloadAction<number>) => {
      const user = state.users.find((user) => user.id === action.payload);
      if (user) {
        user.followed = false;
      }
    },
    setUsers: (state, action: PayloadAction<any>) => {
      state.users = action.payload;
    },
    setCurrentPages: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setHideButton: (state, action: PayloadAction<boolean>) => {
      state.hideButton = action.payload;
    },
  },
});

export const { follow, unfollow, setUsers, setCurrentPages, setHideButton } =
  usersSlice.actions;

export const followTC = (
  id: number
): ThunkAction<void, UsersState, unknown, any> => {
  return (dispatch: any) => {
    followAPI.getAxiosFollow(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(follow(id));
      }
    });
  };
};

export const unFollowTC = (
  id: number
): ThunkAction<void, UsersState, unknown, any> => {
  return (dispatch: any) => {
    unFollowAPI.getAxiosUnfollow(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollow(id));
      }
    });
  };
};

export default usersSlice.reducer;
