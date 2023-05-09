let initialState = {
  navBarData: [
    { id: " ", navName: "Profile", to: "profile" },
    { id: " ", navName: "Dialogs", to: "dialogs" },
    { id: " ", navName: "News", to: "news" },
    { id: " ", navName: "Music", to: "music" },
    { id: " ", navName: "Settings", to: "settings" },
    { id: " ", navName: "Friends", to: "friends" },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};
export default sidebarReducer;
