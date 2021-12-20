import { ADD_ITEM, INITIALIZE, DELETE_ITEM, CHANGE_QUANTITY } from "./constant";
export const newCart = (customer) => {
  return {
    type: INITIALIZE,
    payload: customer,
  };
};
export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};
export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};
export const changeQuantity = ({ id, singe }) => {
  return {
    type: CHANGE_QUANTITY,
    payload: { id, singe },
  };
};
