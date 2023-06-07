import image from "../assets/products/fruit.jpg";

const defaultProduct = {
  image,
  price: 0.5,
  quantity: 199,
  description: "Close to expiry",
  availableQuantity: 199,
  createdAt: "2021-05-25T15:28:54.000Z",
  updatedAt: "2021-05-25T15:28:54.000Z",
};

const defaultFruit = {
  category: {
    _id: "fruit",
  },
  ...defaultProduct,
};

const defaultVeg = {
  category: {
    _id: "veg",
  },
  ...defaultProduct,
};

const apple = {
  _id: "apple",
  title: "Apple",
  sku: "1234567890123",
  ...defaultFruit,
};

const watermelon = {
  _id: "watermelon",
  title: "Watermelon",
  sku: "1234567890124",
  ...defaultFruit,
};

const banana = {
  _id: "banana",
  title: "Banana",
  sku: "1234567890125",
  ...defaultFruit,
};

const lettuce = {
  _id: "lettuce",
  title: "Lettuce",
  sku: "1234567890126",
  ...defaultVeg,
};

const broccoli = {
  _id: "broccoli",
  title: "Broccoli",
  sku: "1234567890127",
  ...defaultVeg,
};

const products = [apple, banana, watermelon, lettuce, broccoli];

export default products;
