import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as ListRedux from "./list.redux";

/* ------------- Assemble The Reducers ------------- */
export const appReducer = combineReducers({
  listRedux: ListRedux.reducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};

/* ------------- Redux Configuration ------------- */

// Create store
const store =
  process.env.NODE_ENV === "production"
    ? createStore(rootReducer)
    : createStore(rootReducer, composeWithDevTools());

export default store;
