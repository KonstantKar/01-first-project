const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
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
