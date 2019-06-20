import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import watcherSaga from "./sagas";
import { save, load } from "redux-localstorage-simple";
import {initialState} from "./initialState";

const storageName = "course_work";
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  save({
    states: ["user", "items", "perPage", "currentPage", "errors", "filters"],
    namespace: storageName
  }),
  sagaMiddleware];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(reducer, load(
  {
    states: ["user", "items", "perPage", "currentPage", "errors", "filters"],
    preloadedState: initialState,
    namespace: storageName,
    disableWarnings: true
  }
  ));
sagaMiddleware.run(watcherSaga);
export { store };
