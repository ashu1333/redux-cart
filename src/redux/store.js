import { createStore, combineReducers } from "redux";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import { devToolsEnhancer } from "redux-devtools-extension";

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());
export default store;
