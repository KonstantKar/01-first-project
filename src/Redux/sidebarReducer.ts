import { PayloadAction } from "@reduxjs/toolkit";
import { sidebarState } from "./types";

let initialState: sidebarState = {
  navBarData: [
    { id: " ", navName: "Profile", to: "profile" },
    { id: " ", navName: "Dialogs", to: "dialogs" },
    { id: " ", navName: "News", to: "news" },
    { id: " ", navName: "Users", to: "users" },
    { id: " ", navName: "Music", to: "music" },
    { id: " ", navName: "Settings", to: "settings" },
    { id: " ", navName: "Friends", to: "friends" },
  ],
};

const sidebarReducer = (state = initialState, action: PayloadAction<any>) => {
  return state;
};
export default sidebarReducer;
