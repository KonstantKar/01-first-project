import produce from "immer";
const SET_NEWS = "SET-NEWS";

const initialState = {
  news: null,
};
const newsReducer = (state = initialState, action) => {
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
};
export default newsReducer;
