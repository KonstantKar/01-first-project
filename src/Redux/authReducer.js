import produce from "immer";
import { authAPI } from "../API/api";
const SET_USER_DATA = "SET-USER-DATA";
const SET_IS_AUTH = "SET-IS-AUTH";

let initialState = {
  data: { id: null, email: null, login: null },
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return produce(state, (draftState) => {
        draftState.data = action.loadData;
      });
    case SET_IS_AUTH:
      return produce(state, (draftState) => {
        draftState.isAuth = action.isAuth;
      });
    default:
      return state;
  }
};

export const setAuthUserDataAC = (loadData) => {
  return {
    type: SET_USER_DATA,
    loadData: loadData,
  };
};

export const setIsAuthAC = (isAuth) => {
  return {
    type: SET_IS_AUTH,
    isAuth: isAuth,
  };
};

export const getAuthAccountDataTC = () => {
  return (dispatch) => {
    authAPI.getAxiosMyAccount().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserDataAC(data.data));
        dispatch(setIsAuthAC(true));
      }
    });
  };
};

export default authReducer;
