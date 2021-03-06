import { createStore, applyMiddleware } from "redux";
import { appReducer } from "../reducer/appReducer";

export default function configureStore(history) {
  const store = createStore(appReducer);
  return store;
}
