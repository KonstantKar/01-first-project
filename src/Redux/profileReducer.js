import { createSlice } from "@reduxjs/toolkit";
import { profileAPI } from "../API/api";

const initialState = {
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
    addPost: (state, action) => {
      const newPost = {
        id: 5,
        message: state.newPostText,
        likes: 0,
      };
      state.postData.push(newPost);
      state.newPostText = "";
    },
    updateNewPostText: (state, action) => {
      state.newPostText = action.payload;
    },
    deletePost: (state, action) => {
      const index = state.postData.findIndex(
        (post) => post.id === action.payload
      );
      if (index !== -1) {
        state.postData.splice(index, 1);
      }
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setPhoto: (state, action) => {
      state.profile.photos = action.payload;
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

export const getProfileTC = (userId) => (dispatch) => {
  profileAPI.getAxiosProfile(userId).then((data) => {
    dispatch(setProfile(data));
  });
};

export const getStatusTC = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((data) => {
    dispatch(setStatus(data));
  });
};

export const updateStatusTC = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export const safePhoto = (file) => (dispatch) => {
  profileAPI.safePhoto(file).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setPhoto(data.data.photos));
    }
  });
};

export default profileSlice.reducer;
