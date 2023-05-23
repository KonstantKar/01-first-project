import { combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import musicReducer from "./musicReducer";
import newsReducer from "./newsReducer";
// по факту то что внутри это наш state
let reduсers = combineReducers({
  dialogs: dialogsReducer,
  profile: profileReducer,
  sidebar: sidebarReducer,
  users: usersReducer,
  music: musicReducer,
  news: newsReducer,
});

let store = legacy_createStore(reduсers);
export default store;
