import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DialogData, dialogState, MessageData } from "./types";

const initialState: dialogState = {
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

const dialogsSlice = createSlice({
  name: "dialogs",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<any>) => {
      const newMessage: MessageData = {
        id: 4,
        message: state.newMessageText,
      };
      state.messageData.push(newMessage);
      state.newMessageText = "";
    },
    updateNewMessageText: (state, action: PayloadAction<any>) => {
      state.newMessageText = action.payload;
    },
  },
});

export const { addMessage, updateNewMessageText } = dialogsSlice.actions;

export default dialogsSlice.reducer;
