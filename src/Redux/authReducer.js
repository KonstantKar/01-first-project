import produce from "immer";
const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
  data: { id: null, email: null, login: null },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return produce(state, (draftState) => {
        draftState.data = action.loadData;
      });
    default:
      return state;
  }
};

export const setAuthUserDataAC = (loadData) => {
  return {
    type: SET_USER_DATA,
    loadData: loadData,
  };
};

export default authReducer;
