import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
export const appReducer = combineReducers({
  ProductReducer: productReducer,
});
