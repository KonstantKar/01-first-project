import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import musicReducer from "./musicReducer";
import newsReducer from "./newsReducer";
import authReducer from "./authReducer";
import thunkMiddleWare from "redux-thunk";
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

let store = legacy_createStore(reduсers, applyMiddleware(thunkMiddleWare));
export default store;
