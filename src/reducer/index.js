import { combineReducers } from "redux";

let initialState = { customerId: null, items: [] };

const myReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "INITIALIZE":
      return { ...state, customerId: payload.id };

    case "ADD_ITEM":
      return { items: [...state.items, payload.item] };

    case "CLEAR":
      return initialState;

    default:
      return state;
  }
};
export default combineReducers({ cart: myReducer });
