import actionTypes from "./actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEMS:
      return { ...state, items: [ ...state.items, ...action.items ] };
    default:
      return state;
  }
};

export default reducer;
