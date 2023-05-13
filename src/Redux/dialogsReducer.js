import produce from "immer";
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
  switch (action.type) {
    case ADD_MESSAGE:
      return produce(state, (draftState) => {
        let newMessage = {
          id: 4,
          message: state.newMessageText,
        };
        draftState.messageData.push(newMessage);
        draftState.newMessageText = "";
      });
    case UPDATE_NEW_MESSAGE_TEXT:
      return produce(state, (draftState) => {
        draftState.newMessageText = action.newText;
      });
    default:
      return state;
  }
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
