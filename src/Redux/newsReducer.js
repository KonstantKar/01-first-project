import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action) => {
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
