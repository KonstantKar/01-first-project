import { PayloadAction } from "@reduxjs/toolkit";
import { sidebarState } from "./types";

let initialState: sidebarState = {
  navBarData: [
    { id: " ", navName: "Profile", to: "profile" },
    { id: " ", navName: "Dialogs", to: "dialogs" },
    { id: " ", navName: "News", to: "news" },
    { id: " ", navName: "Users", to: "users" },
    { id: " ", navName: "Music", to: "music" },
    { id: " ", navName: "Todo", to: "Todo" },
    { id: " ", navName: "Shop", to: "Shop" },
    { id: " ", navName: "Gifs", to: "Gifs" },
    { id: " ", navName: "Quiz", to: "Quiz" },
  ],
};

const sidebarReducer = (state = initialState, action: PayloadAction<any>) => {
  return state;
};
export default sidebarReducer;
