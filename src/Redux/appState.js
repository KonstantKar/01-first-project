import { rerenderEntireTree } from "../render";

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
  },
  profile: {
    postData: [
      { id: 1, message: "Hi,how are you", likes: "10" },
      { id: 2, message: "MY FIRST POST", likes: "20" },
      { id: 3, message: "Yop,Yan", likes: "20" },
      { id: 4, message: "LMAO KEK", likes: "20" },
    ],
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

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likes: 0,
  };
  appState.profile.postData.push(newPost);
  rerenderEntireTree(appState);
};
export default appState;
