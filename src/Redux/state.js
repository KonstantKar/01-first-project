import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
let store = {
  _state: {
    dialogs: {
      dialogsData: [
        { id: 1, name: "Polya" },
        { id: 2, name: "Amur" },
        { id: 3, name: "Mars" },
        { id: 4, name: "Yan" },
        { id: 5, name: "Bogdan" },
      ],
      messageData: [
        { id: 1, message: "Yop" },
        { id: 2, message: "Hi bratischka" },
        { id: 3, message: "EEEE TOHH" },
      ],
      newMessageText: "Введите сообщение",
    },
    profile: {
      postData: [
        { id: 1, message: "Hi,how are you", likes: "10" },
        { id: 2, message: "MY FIRST POST", likes: "20" },
        { id: 3, message: "Yop,Yan", likes: "20" },
        { id: 4, message: "LMAO KEK", likes: "20" },
      ],
      newPostText: "Текст поста",
    },
    sideBar: {
      navBarData: [
        { id: " ", navName: "Profile", to: "profile" },
        { id: " ", navName: "Dialogs", to: "dialogs" },
        { id: " ", navName: "News", to: "news" },
        { id: " ", navName: "Music", to: "music" },
        { id: " ", navName: "Settings", to: "settings" },
        { id: " ", navName: "Friends", to: "friends" },
        { id: " ", navName: "Git", to: "Git" },
      ],
    },
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

  _rerenderEntireTree() {
    console.log("state changed");
  },

  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);
    this._rerenderEntireTree(this._state);
  },
};
