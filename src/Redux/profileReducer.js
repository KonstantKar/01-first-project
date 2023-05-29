import produce from "immer";
import { profileAPI } from "../API/api";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_PROFILE = "SET-PROFILE";
const DELETE_POST = "DELETE-POST";
const SET_STATUS = "SET-STATUS";

let initialState = {
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

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return produce(state, (draftState) => {
        let newPost = {
          id: 5,
          message: draftState.newPostText,
          likes: 0,
        };
        draftState.postData.push(newPost);
        draftState.newPostText = "";
      });
    case UPDATE_NEW_POST_TEXT:
      return produce(state, (draftState) => {
        draftState.newPostText = action.newText;
      });
    case DELETE_POST:
      return produce(state, (draftState) => {
        const index = draftState.postData.findIndex(
          (post) => post.id === action.postID
        );
        if (index !== -1) {
          draftState.postData.splice(index, 1);
        }
      });
    case SET_PROFILE:
      return produce(state, (draftState) => {
        draftState.profile = action.loadProfile;
      });
    case SET_STATUS:
      return produce(state, (draftState) => {
        draftState.status = action.status;
      });
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const deletePostActionCreator = (idToDelete) => {
  return {
    type: DELETE_POST,
    postID: idToDelete,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const setProfileAC = (loadProfile) => {
  return {
    type: SET_PROFILE,
    loadProfile: loadProfile,
  };
};

export const setStatusAC = (status) => {
  return {
    type: SET_STATUS,
    status: status,
  };
};

export const getProfileTC = (userId) => (dispatch) => {
  profileAPI.getAxiosProfile(userId).then((data) => {
    dispatch(setProfileAC(data));
  });
};

export const getStatusTC = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((data) => {
    dispatch(setStatusAC(data));
  });
};

export const updateStatusTC = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setStatusAC(status));
    }
  });
};

export default profileReducer;
