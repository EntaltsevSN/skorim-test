import { combineReducers } from "redux";
import { elementsReducer } from "./elements/reducers";

export const reducers = combineReducers({
  elements: elementsReducer
});