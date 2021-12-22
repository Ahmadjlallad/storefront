import api from "../api";
import { ADD_ITEM, INITIALIZE, DELETE_ITEM, CHANGE_QUANTITY } from "./constant";
export const newCart = (customer) => {
  return {
    type: INITIALIZE,
    payload: customer,
  };
};
export const addItem = (item) => async (dispatch, getState) => {
  if (!item.item) item.item = item;
  const a = item.item;
  console.log(item.item);
  console.log(item);
  await api.put(`/${a.id}`, {
    inventoryCount: a.inventoryCount - 1,
  });
  dispatch({
    type: ADD_ITEM,
    payload: item,
  });
};
export const deleteItem = (id) => async (dispatch, getState) => {
  const item = getState().cart.items.find(({ id: _id }) => _id === id.id);

  api.put(`/${id.id}`, {
    inventoryCount: item.inventoryCount + item.quantity,
  });
  dispatch({
    type: DELETE_ITEM,
    payload: id,
  });
};
export const changeQuantity =
  ({ id, singe }) =>
  async (dispatch, getState) => {
    const item = getState().cart.items.find(({ id: _id }) => _id === id);
    await api.put(`/${id}`, {
      inventoryCount: item.inventoryCount - singe,
    });
    dispatch({
      type: CHANGE_QUANTITY,
      payload: { id, singe },
    });
  };
