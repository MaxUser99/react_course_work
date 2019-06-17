import { takeEvery, call, put, delay, select } from "redux-saga/effects";
import actionsTypes from "../actionTypes";
import axios from "axios";
import { addItem, onLoadFinish } from "store/actions";

const doesFirstPageHaveItems = ({ items, perPage }) => items.length - perPage >= 0;

function getAPIcall(url) {
  return axios.get(url);
}

function* addCollection(list) {
  const flag = yield select(doesFirstPageHaveItems);
  const delaySpan = flag ? 100 : 300;
  for (const person of list) {
    yield delay(delaySpan);
    yield put(addItem(person))
  }
}

function* loadData(){
  const baseURL = process.env.REACT_APP_API_URL;
  let next = `${baseURL}character/?page=1`;
  while(next) {
    const response = yield call(getAPIcall, next);
    yield addCollection(response.data.results);
    next = response.data.info.next;
  }
  yield put(onLoadFinish());
}

function* watchSaga() {
  yield takeEvery(actionsTypes.START_LOAD, loadData);
}

export default watchSaga;
