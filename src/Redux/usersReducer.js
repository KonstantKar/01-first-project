import produce from "immer";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

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
    //обработчик для обновления currentPage
    case SET_CURRENT_PAGE:
      return produce(state, (draftState) => {
        draftState.currentPage = action.currentPage;
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

export default usersReducer;
