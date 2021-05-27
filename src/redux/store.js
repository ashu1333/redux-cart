import { createStore, combineReducers } from "redux";
import productReducer from "./reducers/productReducer";
import { devToolsEnhancer } from "redux-devtools-extension";

const rootReducer = combineReducers({
  productReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());
export default store;
