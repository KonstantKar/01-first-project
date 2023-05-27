import produce from "immer";
import { followAPI, unFollowAPI } from "../API/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_HIDE_BUTTON = "SET_HIDE_BUTTON";

let initialState = {
  users: [],
  hideButton: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return produce(state, (draftState) => {
        const user = draftState.users.find((user) => user.id === action.userID);
        if (user) {
          user.followed = true;
        }
      });
    case UNFOLLOW:
      return produce(state, (draftState) => {
        const user = draftState.users.find((user) => user.id === action.userID);
        if (user) {
          user.followed = false;
        }
      });
    case SET_USERS:
      return produce(state, (draftState) => {
        draftState.users = action.loadUsers;
      });
    //обработчик для обновления currentPage
    case SET_CURRENT_PAGE:
      return produce(state, (draftState) => {
        draftState.currentPage = action.currentPage;
      });
    case SET_HIDE_BUTTON:
      return produce(state, (draftState) => {
        draftState.hideButton = action.hideButton;
      });
    default:
      return state;
  }
};

export const followAC = (userID) => {
  return {
    type: FOLLOW,
    userID: userID,
  };
};

export const unfollowAC = (userID) => {
  return {
    type: UNFOLLOW,
    userID: userID,
  };
};

export const setUsersAC = (loadUsers) => {
  return {
    type: SET_USERS,
    loadUsers: loadUsers,
  };
};

export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
});

export const setHideButton = (hideButton) => ({
  type: SET_HIDE_BUTTON,
  hideButton: hideButton,
});

export const followTC = (id) => {
  return (dispatch) => {
    setHideButton(true);
    followAPI.getAxiosFollow(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followAC(id));
        dispatch(setHideButton(false));
      }
    });
  };
};

export const unFollowTC = (id) => {
  return (dispatch) => {
    setHideButton(true);
    unFollowAPI.getAxiosUnfollow(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowAC(id));
        dispatch(setHideButton(false));
      }
    });
  };
};

export default usersReducer;
