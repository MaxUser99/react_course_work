import actionTypes from "./actionTypes";

export const startLoading = () => ({ type: actionTypes.START_LOAD });
export const stopLoading = () => ({ type: actionTypes.STOP_LOADING});
export const onLoadFailure = () => ({ type: actionTypes.ON_LOAD_FAILURE });
export const onLoadFinish = () => ({ type: actionTypes.ON_LOAD_FINISH });
export const addItems = (items) => ({ type: actionTypes.ADD_ITEMS, items });
export const addItem = (item) => ({ type: actionTypes.ADD_ITEM, item });
export const filterItems = () => ({ type: actionTypes.FILTER_ITEMS });
