import produce from "immer";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_PROFILE = "SET-PROFILE";

let initialState = {
  postData: [
    { id: 1, message: "Hi,how are you", likes: "10" },
    { id: 2, message: "MY FIRST POST", likes: "20" },
    { id: 3, message: "Yop,Yan", likes: "20" },
    { id: 4, message: "LMAO KEK", likes: "20" },
  ],
  newPostText: "Текст поста",
  profile: null,
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
    case SET_PROFILE:
      return produce(state, (draftState) => {
        draftState.profile = action.loadProfile;
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
export default profileReducer;

/* const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 5,
      message: state.newPostText,
      likes: 0,
    };
    state.postData.push(newPost);
    state.newPostText = "";
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
  }
  return state;
}; */
