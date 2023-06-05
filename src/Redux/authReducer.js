import produce from "immer";
import { authAPI, loginAPI, unLoginAPI } from "../API/api";
const SET_USER_DATA = "SET-USER-DATA";
const SET_IS_AUTH = "SET-IS-AUTH";
const IS_INITIALIZED = "IS-INITIALIZED";

let initialState = {
  data: { id: null, email: null, login: null },
  isAuth: false, // cвойство для проверки залогинин юзер или нет
  isInitialized: false, // свойство нужно для верной навигации после логина в app.js
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
    case IS_INITIALIZED:
      return produce(state, (draftState) => {
        draftState.isInitialized = action.isInitialized;
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

export const setIsInitializedAC = (isInitialized) => {
  return {
    type: IS_INITIALIZED,
    isInitialized: isInitialized,
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

export const loginAccountTC = (values) => {
  return (dispatch) => {
    loginAPI.getAxiosLogin(values).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setIsAuthAC(true));
        dispatch(setIsInitializedAC(true));
      } else {
        alert("Попробуй ещё раз");
      }
    });
  };
};

export const leaveAccountTC = (values) => {
  return (dispatch) => {
    unLoginAPI.deleteAxiosLogin(values).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setIsAuthAC(false));
      }
    });
  };
};

/*axios
      .post(
        `https://social-network.samuraijs.com/api/1.0/auth/login`,
        {
          email: values.username,
          password: values.password,
          rememberMe: true, // или false, в зависимости от вашего случая
        },
        {
          withCredentials: true,
          headers: {
            "API-KEY": "6b6ecac8-d7f7-4477-87bb-015031017fed",
          },
        }
      )
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(setIsAuthAC(true));
          setIsAuthenticated(true);
        } else {
          alert("Попробуй ещё раз");
        }
      }); */

export default authReducer;
