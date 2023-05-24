import { combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import musicReducer from "./musicReducer";
import newsReducer from "./newsReducer";
import authReducer from "./authReducer";
// по факту то что внутри это наш state
let reduсers = combineReducers({
  dialogs: dialogsReducer,
  profile: profileReducer,
  sidebar: sidebarReducer,
  users: usersReducer,
  music: musicReducer,
  news: newsReducer,
  auth: authReducer,
});

let store = legacy_createStore(reduсers);
export default store;
