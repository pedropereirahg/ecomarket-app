const defaultProduct = {
  price: 0.5,
  quantity: 199,
};

const defaultFruit = {
  image: "",
  category: {
    _id: "fruit",
  },
  ...defaultProduct,
};

const defaultVeg = {
  image: "",
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
