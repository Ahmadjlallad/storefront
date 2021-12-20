import faker from "faker";
const items = [];
let category = faker.commerce.department();
for (let i = 0; i < 10; i++) {
  if (i === 5) category = faker.commerce.department();
  items.push({
    id: faker.datatype.uuid(),
    category,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    inventoryCount: faker.random.alphaNumeric(),
    image: faker.random.image(),
  });
}
export default items;
