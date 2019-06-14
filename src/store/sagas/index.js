import { takeEvery, call, put, delay } from "redux-saga/effects";
import actionsTypes from "../actionTypes";
import axios from "axios";
import { addItem, onLoadFinish } from "store/actions";

function getAPIcall(url) {
  return axios.get(url);
}

function* loadData(){
  console.log("LOAD DATA CALL");
  const baseURL = process.env.REACT_APP_API_URL;
  const charactersURL = `${baseURL}character`;
  const response = yield call(getAPIcall, charactersURL);
  for ( const person of response.data.results) {
    yield delay(300);
    yield put(addItem(person));
  }
  yield put(onLoadFinish());
}

function* watchSaga() {
  yield takeEvery(actionsTypes.START_LOAD, loadData);
}

export default watchSaga;
