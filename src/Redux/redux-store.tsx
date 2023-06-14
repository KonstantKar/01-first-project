import {
  configureStore,
  combineReducers,
  CombinedState,
} from "@reduxjs/toolkit";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import musicReducer from "./musicReducer";
import newsReducer from "./newsReducer";
import authReducer from "./authReducer";

// Определение типа корневого состояния
export type RootState = CombinedState<{
  dialogs: ReturnType<typeof dialogsReducer>;
  profile: ReturnType<typeof profileReducer>;
  sidebar: ReturnType<typeof sidebarReducer>;
  users: ReturnType<typeof usersReducer>;
  music: ReturnType<typeof musicReducer>;
  news: ReturnType<typeof newsReducer>;
  auth: ReturnType<typeof authReducer>;
}>;

const rootReducer = combineReducers({
  dialogs: dialogsReducer,
  profile: profileReducer,
  sidebar: sidebarReducer,
  users: usersReducer,
  music: musicReducer,
  news: newsReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
