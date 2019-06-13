import { takeEvery } from "redux-saga/effects";
import actionsTypes from "../actionTypes";

function* loadData(){
  console.log("data load");
}

function* watchSaga() {
  yield takeEvery(actionsTypes.LOAD, loadData);
}

export default watchSaga;
