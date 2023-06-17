import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { profileAPI, ResultCodesEnum } from "../API/api";
import { ProfileState, PostData } from "./types";
import { RootState } from "./redux-store";

const initialState: ProfileState = {
  postData: [
    { id: 1, message: "Hi,how are you", likes: "10" },
    { id: 2, message: "MY FIRST POST", likes: "20" },
    { id: 3, message: "Yop,Yan", likes: "20" },
    { id: 4, message: "LMAO KEK", likes: "20" },
  ],
  newPostText: "Текст поста",
  profile: null,
  status: "Ваш статус",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addPost: (state) => {
      const newPost: PostData = {
        id: 5,
        message: state.newPostText,
        likes: "0",
      };
      state.postData.push(newPost);
      state.newPostText = "";
    },
    updateNewPostText: (state, action: PayloadAction<string>) => {
      state.newPostText = action.payload;
    },
    deletePost: (state, action: PayloadAction<number>) => {
      const index = state.postData.findIndex(
        (post) => post.id === action.payload
      );
      if (index !== -1) {
        state.postData.splice(index, 1);
      }
    },
    setProfile: (state, action: PayloadAction<any>) => {
      state.profile = action.payload;
    },
    setStatus: (state, action: PayloadAction<any>) => {
      state.status = action.payload;
    },
    setPhoto: (state, action: PayloadAction<any>) => {
      state.profile!.photos = action.payload;
    },
  },
});

export const {
  addPost,
  updateNewPostText,
  deletePost,
  setProfile,
  setStatus,
  setPhoto,
} = profileSlice.actions;

export const getProfileTC = createAsyncThunk<
  Promise<void>,
  any,
  { state: RootState }
>("profile/getProfile", async (userId, thunkAPI) => {
  try {
    const response = await profileAPI.getAxiosProfile(userId);
    thunkAPI.dispatch(setProfile(response));
  } catch (error) {
    console.log("Ошибка при получении профиля");
  }
});

export const getStatusTC = createAsyncThunk<
  Promise<void>,
  any,
  { state: ProfileState }
>("profile/getStatus", async (userId, thunkAPI) => {
  try {
    const response = await profileAPI.getStatus(userId);
    thunkAPI.dispatch(setStatus(response));
  } catch {
    console.log("Ошибка при получении статуса");
  }
});

export const updateStatusTC = createAsyncThunk<
  Promise<void>,
  any,
  { state: ProfileState }
>("profile/updateStatus", async (status, thunkAPI) => {
  try {
    const response = await profileAPI.updateStatus(status);
    if (response.resultCode === ResultCodesEnum.Success) {
      thunkAPI.dispatch(setStatus(status));
    }
  } catch (error) {
    alert("Ошибка при обновлении статуса");
  }
});

export const safePhoto = createAsyncThunk<
  Promise<void>,
  any,
  { state: ProfileState }
>("profile/savePhoto", async (file, thunkAPI) => {
  try {
    const response = await profileAPI.savePhoto(file);
    if (response.resultCode === ResultCodesEnum.Success) {
      thunkAPI.dispatch(setPhoto(response.data.photos));
    }
  } catch (error) {
    console.error("Ошибка при сохранении фото:", error);
    throw error;
  }
});

export const changeContactsTC = createAsyncThunk<
  Promise<void>,
  any,
  { state: RootState }
>("profile/changeContacts", async (profile, thunkAPI) => {
  try {
    const authenticatedUserId = thunkAPI.getState().auth.data.id;
    const response = await profileAPI.changeContacts(profile);
    if (response.resultCode === ResultCodesEnum.Success) {
      thunkAPI.dispatch(getProfileTC(authenticatedUserId));
    } else {
      alert("В контакты нужно вводить URL-адрес");
    }
  } catch (error) {
    console.error("Ошибка при изменении контактов:", error);
    throw error;
  }
});

export default profileSlice.reducer;
