import { combineReducers } from "redux";
import {
  ADD_ITEM,
  INITIALIZE,
  DELETE_ITEM,
  CHANGE_QUANTITY,
} from "../action/constant";

let initialState = { customerId: null, items: [] };

const myReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case INITIALIZE:
      return { ...state, customerId: payload.id };
    case ADD_ITEM:
      const checkQuantity = state.items.find(
        ({ id }) => id === payload.item.id
      );
      if (checkQuantity) {
        checkQuantity.quantity = checkQuantity.quantity + 1;
        return {
          items: [...state.items],
        };
      }
      return {
        items: [
          ...state.items,
          {
            ...payload.item,
            quantity: 1,
          },
        ],
      };
    case DELETE_ITEM:
      const filteredItems = state.items.filter(({ id }) => id !== payload.id);
      return {
        items: [...filteredItems],
      };
    case CHANGE_QUANTITY:
      const changeQuantity = state.items.find(({ id }) => id === payload.id);
      changeQuantity.quantity = changeQuantity.quantity + payload.singe;
      return {
        items: [...state.items],
      };
    case "CLEAR":
      return initialState;

    default:
      return state;
  }
};

export default combineReducers({ cart: myReducer });
