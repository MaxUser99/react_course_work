import actionTypes from "./actionTypes";
import { loadStatus } from "constants/loadStatus";

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEMS:
      return { ...state, itemsLoadStatus: loadStatus.LOADED, items: [ ...state.items, ...action.items ] };
    default:
      return state;
  }
};

export default reducer;
