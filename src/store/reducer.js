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
    case actionTypes.FILTER_ITEMS:
      return { ...state, currentPage: 0, filters: { ...state.filters, [action.propName] : action.value } };
    case actionTypes.EDIT_ITEM:
      const updatedItems = state.items.map(x => x.id === action.item.id ? action.item : x);
      return { ...state, items: updatedItems };
    default:
      return state;
  }
};

export default reducer;
