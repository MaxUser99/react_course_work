import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import { initialState } from "./initialState";

export const store = createStore(reducer, initialState, applyMiddleware());
