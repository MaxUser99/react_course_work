import { takeEvery, put, delay, select, retry } from "redux-saga/effects";
import actionsTypes from "../actionTypes";
import axios from "axios";
import { addItem, onLoadFinish } from "store/actions";

const doesFirstPageHaveItems = ({ items, perPage }) => items.length - perPage >= 0;

function getAPIcall(url) {
  return axios.get(url);
}

function* addCollection(list, merge) {
  const flag = yield select(doesFirstPageHaveItems);
  const delaySpan = flag ? 600 : 100;
  for (const person of list) {
    if(merge) {
      const itemExist = yield select(({ items }) => items.some(x => x.id === person.id));
      if(itemExist)
        continue;
    }
    yield delay(delaySpan);
    yield put(addItem(person))
  }
}

function* loadData(){
  const baseURL = process.env.REACT_APP_API_URL;
  const savedItemsLength = yield select(({ items }) => items.length);
  const perPage = 20;
  const savedPages = Math.floor(savedItemsLength / perPage);
  let merge = true;
  let extraMerge = !!(savedItemsLength % perPage);
  let next = `${baseURL}character/?page=${savedPages}`;
  while(next) {
    const response = yield retry(10, 2000, getAPIcall, next);
    yield addCollection(response.data.results, merge);
    next = response.data.info.next;
    merge = extraMerge;
    extraMerge = false;
  }
  yield put(onLoadFinish());
}

function* watchSaga() {
  yield takeEvery(actionsTypes.START_LOAD, loadData);
}

export default watchSaga;
