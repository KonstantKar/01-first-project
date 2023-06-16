import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { followAPI, ResultCodesEnum, unFollowAPI } from "../API/api";
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

export const followTC = createAsyncThunk<
  Promise<void>,
  number,
  { state: UsersState }
>("users/follow", async (id, thunkAPI) => {
  try {
    const response = await followAPI.getAxiosFollow(id);
    if (response.resultCode === ResultCodesEnum.Success) {
      thunkAPI.dispatch(follow(id));
    }
  } catch (error) {
    alert("Ошибка при выполнении подписки");
  }
});

export const unFollowTC = createAsyncThunk<
  Promise<void>,
  number,
  { state: UsersState }
>("users/unfollow", async (id, thunkAPI) => {
  try {
    const responce = await unFollowAPI.getAxiosUnfollow(id);
    if (responce.resultCode === ResultCodesEnum.Success) {
      thunkAPI.dispatch(unfollow(id));
    }
  } catch (error) {
    alert("Ошибка при выполнении отписки");
  }
});

export default usersSlice.reducer;
