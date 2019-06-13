import { takeEvery, call, put } from "redux-saga/effects";
import actionsTypes from "../actionTypes";
import axios from "axios";
import { addItems } from "store/actions";

function getAPIcall(url) {
  return axios.get(url);
}

function* loadData(){
  console.log("LOAD DATA CALL");
  const baseURL = process.env.REACT_APP_API_URL;
  const charactersURL = `${baseURL}character`;
  const response = yield call(getAPIcall, charactersURL);
  yield put(addItems(response.data.results));
}

function* watchSaga() {
  yield takeEvery(actionsTypes.START_LOAD, loadData);
}

export default watchSaga;
