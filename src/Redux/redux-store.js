import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import musicReducer from "./musicReducer";
import newsReducer from "./newsReducer";
import authReducer from "./authReducer";

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
