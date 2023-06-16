import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authAPI, loginAPI, ResultCodesEnum, unLoginAPI } from "../API/api";
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

export const getAuthAccountDataTC = createAsyncThunk<
  Promise<void>,
  void,
  { state: AuthState }
>("auth/getAuthAccountData", async (_, thunkAPI) => {
  try {
    const response = await authAPI.getAxiosMyAccount();
    if (response.resultCode === ResultCodesEnum.Success) {
      thunkAPI.dispatch(setAuthUserData(response.data));
      thunkAPI.dispatch(setIsAuth(true));
    }
  } catch (error) {
    console.error("Ошибка при получении данных аккаунта:", error);
    throw error;
  }
});

export const loginAccountTC = createAsyncThunk<
  Promise<void>,
  any,
  { state: AuthState }
>("auth/loginAccount", async (values, thunkAPI) => {
  try {
    const response = await loginAPI.getAxiosLogin(values);
    if (response.data.resultCode === ResultCodesEnum.Success) {
      thunkAPI.dispatch(setIsAuth(true));
      thunkAPI.dispatch(setIsInitialized(true));
    }
  } catch (error) {
    alert("Пароль или почта неверны");
  }
});

export const leaveAccountTC = createAsyncThunk<
  Promise<void>,
  void,
  { state: AuthState }
>("auth/leaveAccount", async (_, thunkAPI) => {
  try {
    const response = await unLoginAPI.deleteAxiosLogin();
    if (response.data.resultCode === ResultCodesEnum.Success) {
      thunkAPI.dispatch(setIsAuth(false));
    }
  } catch (error) {
    alert("Ошибка при выходе из аккаунта");
  }
});

export default authSlice.reducer;
