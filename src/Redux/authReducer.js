import { createSlice } from "@reduxjs/toolkit";
import { authAPI, loginAPI, unLoginAPI } from "../API/api";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: { id: null, email: null, login: null },
    isAuth: false,
    isInitialized: false,
  },
  reducers: {
    setAuthUserData: (state, action) => {
      state.data = action.payload;
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setIsInitialized: (state, action) => {
      state.isInitialized = action.payload;
    },
  },
});

export const { setAuthUserData, setIsAuth, setIsInitialized } =
  authSlice.actions;

export const getAuthAccountDataTC = () => (dispatch) => {
  authAPI.getAxiosMyAccount().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(data.data));
      dispatch(setIsAuth(true));
    }
  });
};

export const loginAccountTC = (values) => (dispatch) => {
  loginAPI.getAxiosLogin(values).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setIsAuth(true));
      dispatch(setIsInitialized(true));
    } else {
      alert("Попробуй ещё раз");
    }
  });
};

export const leaveAccountTC = (values) => (dispatch) => {
  unLoginAPI.deleteAxiosLogin(values).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setIsAuth(false));
    }
  });
};

export default authSlice.reducer;
