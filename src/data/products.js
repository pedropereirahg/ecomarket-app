import image from "../assets/products/fruit.jpg";

const defaultProduct = {
  image,
  price: 0.5,
  quantity: 199,
  description: "Close to expiry",
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
  title: "Apple",
  ...defaultFruit,
};

const watermelon = {
  title: "Watermelon",
  ...defaultFruit,
};

const banana = {
  title: "Banana",
  ...defaultFruit,
};

const lettuce = {
  title: "Lettuce",
  ...defaultVeg,
};

const broccoli = {
  title: "Broccoli",
  ...defaultVeg,
};

const products = [apple, banana, watermelon, lettuce, broccoli];

export default products;
