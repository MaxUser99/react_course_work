import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import { initialState } from "./initialState";
import watcherSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watcherSaga);

export { store };
