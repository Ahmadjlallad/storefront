import faker from "faker";
import { combineReducers } from "redux";
const items = [];
let category = faker.commerce.department();
for (let i = 0; i < 10; i++) {
  if (i === 5) category = faker.commerce.department();
  items.push({
    category,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    inventoryCount: faker.random.alphaNumeric(),
    image: faker.random.image(),
  });
}
let initialState = { customerId: null, items };

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
