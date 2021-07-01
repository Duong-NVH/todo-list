import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  add: ["data"],
  update: ["data"],
  remove: ["data"],
});

export const UserTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  list: [],
};

/* ------------- Reducers ------------- */

export const add = (state = INITIAL_STATE, action) => {
  let data = action.data ? action.data : {};
  return {
    ...state,
    list: [...state.list, data],
  };
};

export const update = (state = INITIAL_STATE, action) => {
  let data = action.data ? action.data : {};
  return {
    ...state,
    list: [...state.list, data],
    alo: "1",
  };
};

export const remove = (state = INITIAL_STATE, action) => {
  let data = action.data ? action.data : {};
  return {
    ...state,
    list: [...state.list, data],
    alo: "2",
  };
};

/* ------------- Mapping ------------- */
export const HANDLERS = {
  [Types.ADD]: add,
  [Types.UPDATE]: update,
  [Types.REMOVE]: remove,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
