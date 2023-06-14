import { createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { authAPI, loginAPI, unLoginAPI } from "../API/api";
import { AuthState } from "./types";

const initialState: AuthState = {
  data: { id: null, email: null, login: null },
  isAuth: false,
  isInitialized: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUserData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setIsInitialized: (state, action: PayloadAction<boolean>) => {
      state.isInitialized = action.payload;
    },
  },
});

export const { setAuthUserData, setIsAuth, setIsInitialized } =
  authSlice.actions;

export const getAuthAccountDataTC =
  (): ThunkAction<void, AuthState, unknown, any> => (dispatch: any) => {
    authAPI.getAxiosMyAccount().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(data.data));
        dispatch(setIsAuth(true));
      }
    });
  };

export const loginAccountTC =
  (values: any): ThunkAction<void, AuthState, unknown, any> =>
  (dispatch: any) => {
    loginAPI.getAxiosLogin(values).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setIsAuth(true));
        dispatch(setIsInitialized(true));
      } else {
        alert("Попробуй ещё раз");
      }
    });
  };

export const leaveAccountTC =
  (): ThunkAction<void, AuthState, unknown, any> => (dispatch: any) => {
    unLoginAPI.deleteAxiosLogin().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setIsAuth(false));
      }
    });
  };

export default authSlice.reducer;
