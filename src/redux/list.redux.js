import { createReducer, createActions } from "reduxsauce";
import { LOCAL_STORE_KEY } from "../const";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  add: ["data"],
  update: ["data"],
  remove: ["data"],
  removeSelected: [],
});

export const UserTypes = Types;
export default Creators;

const storedData = localStorage.getItem(LOCAL_STORE_KEY)
  ? JSON.parse(localStorage.getItem(LOCAL_STORE_KEY))
  : [];

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  list: storedData,
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

  let updatedList = state.list.map((item) =>
    item.id === data.id ? { ...data } : item
  ); //replace item with id

  return {
    ...state,
    list: [...updatedList],
  };
};

export const remove = (state = INITIAL_STATE, action) => {
  let removeId = action.data ? action.data : "";

  let filteredList = state.list.filter((item) => item.id !== removeId);

  return {
    ...state,
    list: [...filteredList],
  };
};

export const removeSelected = (state = INITIAL_STATE) => {
  let filteredList = state.list.filter((item) => item.state === 1);
  return {
    ...state,
    list: [...filteredList],
  };
};

/* ------------- Mapping ------------- */
export const HANDLERS = {
  [Types.ADD]: add,
  [Types.UPDATE]: update,
  [Types.REMOVE]: remove,
  [Types.REMOVE_SELECTED]: removeSelected,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
