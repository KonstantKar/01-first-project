const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  if (action.type === ADD_MESSAGE) {
    let newMessage = {
      id: 4,
      message: state.newMessageText,
    };
    state.messageData.push(newMessage);
    state.newMessageText = "";
  } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    state.newMessageText = action.newText;
  }
  return state;
};

export const addNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  };
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};
export default dialogsReducer;
