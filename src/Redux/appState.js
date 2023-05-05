let rerenderEntireTree = () => {
  console.log("state changed");
};

let appState = {
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
      { id: "", navName: "Profile", to: "profile" },
      { id: "", navName: "Dialogs", to: "dialogs" },
      { id: "", navName: "News", to: "news" },
      { id: "", navName: "Music", to: "music" },
      { id: "", navName: "Settings", to: "settings" },
      { id: "", navName: "Friends", to: "friends" },
      { id: "", navName: "Git", to: "Git" },
    ],
  },
};

export const addPost = () => {
  let newPost = {
    id: 5,
    message: appState.profile.newPostText,
    likes: 0,
  };
  appState.profile.postData.push(newPost);
  appState.profile.newPostText = "";
  rerenderEntireTree(appState);
};

export const updateNewPostChange = (newText) => {
  appState.profile.newPostText = newText;
  rerenderEntireTree(appState);
};

export const addNewMessage = () => {
  let newMessage = {
    id: 4,
    message: appState.dialogs.newMessageText,
  };
  appState.dialogs.messageData.push(newMessage);
  appState.dialogs.newMessageText = "";
  rerenderEntireTree(appState);
};

export const updateNewMessageChange = (newText) => {
  appState.dialogs.newMessageText = newText;
  rerenderEntireTree(appState);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};
export default appState;
