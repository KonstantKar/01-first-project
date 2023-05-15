import produce from "immer";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
  users: [],
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

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    loadUsers: users,
  };
};

export default usersReducer;
