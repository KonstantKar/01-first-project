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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profile.newPostText,
        likes: 0,
      };
      this._state.profile.postData.push(newPost);
      this._state.profile.newPostText = "";
      this._rerenderEntireTree(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profile.newPostText = action.newText;
      this._rerenderEntireTree(this._state);
    } else if (action.type === "ADD-MESSAGE") {
      let newMessage = {
        id: 4,
        message: this._state.dialogs.newMessageText,
      };
      this._state.dialogs.messageData.push(newMessage);
      this._state.dialogs.newMessageText = "";
      this._rerenderEntireTree(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.dialogs.newMessageText = action.newText;
      this._rerenderEntireTree(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: "ADD-POST",
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    newText: text,
  };
};

export const addNewMessageTextActionCreator = (text) => {
  return {
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newText: text,
  };
};

export const addMessageActionCreator = () => {
  return {
    type: "ADD-MESSAGE",
  };
};
export default store;
