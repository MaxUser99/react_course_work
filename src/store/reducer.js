import actionTypes from "./actionTypes";
import { loadStatus } from "constants/loadStatus";

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.START_LOAD:
      return { ...state, itemsLoadStatus: loadStatus.ON_LOAD };
    case actionTypes.ON_LOAD_FINISH:
      return { ...state, itemsLoadStatus: loadStatus.LOADED };
    case actionTypes.ADD_ITEM:
      return { ...state, items: [ ...state.items, action.item ] };
    case actionTypes.ADD_ITEMS:
      return { ...state, items: [ ...state.items, ...action.items ] };
    case actionTypes.CHANGE_PAGE:
      return { ...state, currentPage: action.newPageValue };
    default:
      return state;
  }
};

export default reducer;
