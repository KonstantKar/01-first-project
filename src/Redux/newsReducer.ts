import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { newsState } from "./types";

const initialState: newsState = {
  news: [],
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<any>) => {
      state.news = action.payload;
    },
  },
});

export const { setNews } = newsSlice.actions;

export default newsSlice.reducer;

//До ввода redux-toolkit! Ну а сверху после
/* const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return produce(state, (draftState) => {
        draftState.news = action.loadNews;
      });
    default:
      return state;
  }
};

export const setNewsAC = (loadNews) => {
  return {
    type: SET_NEWS,
    loadNews: loadNews,
  };
}; */
