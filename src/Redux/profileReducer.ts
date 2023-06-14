import { createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { profileAPI } from "../API/api";
import { Photos, ProfileState, PostData } from "./types";

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
    addPost: (state, action: PayloadAction<string>) => {
      const newPost: PostData = {
        id: 5,
        message: action.payload,
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

export const getProfileTC =
  (userId: number): ThunkAction<void, ProfileState, unknown, any> =>
  async (dispatch) => {
    try {
      const data = await profileAPI.getAxiosProfile(userId);
      dispatch(setProfile(data));
    } catch (error) {
      console.error("Ошибка при получении профиля:", error);
    }
  };

export const getStatusTC =
  (userId: number): ThunkAction<void, ProfileState, unknown, any> =>
  (dispatch: any) => {
    profileAPI.getStatus(userId).then((data) => {
      dispatch(setStatus(data));
    });
  };

export const updateStatusTC =
  (status: string): ThunkAction<void, ProfileState, unknown, any> =>
  (dispatch: any) => {
    profileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };

export const safePhoto =
  (file: any): ThunkAction<void, ProfileState, unknown, any> =>
  (dispatch: any) => {
    profileAPI.savePhoto(file).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setPhoto(data.data.photos));
      }
    });
  };

export const changeContactsTC =
  (profile: any): ThunkAction<void, ProfileState, unknown, any> =>
  (dispatch: any, getState: any) => {
    const authenticatedUserId = getState().auth.data.id;
    profileAPI.changeContacts(profile).then((data) => {
      if (data.resultCode === 0) {
        dispatch(getProfileTC(authenticatedUserId));
      } else {
        alert("В контакты нужно вводить URL-адрес");
      }
    });
  };

export default profileSlice.reducer;
