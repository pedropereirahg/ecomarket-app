import orangeImage from "../assets/products/orange.jpg";
import avocadoImage from "../assets/products/avocado.jpg";
import cornImage from "../assets/products/corn.jpg";
import greenApple from "../assets/products/green_apple.jpg";
import milkImage from "../assets/products/milk.jpg";
import papayaImage from "../assets/products/papaya.jpg";
import tomatoImage from "../assets/products/tomato.jpg";
import lettuceImage from "../assets/products/lettuce.jpg";
import brocoliImage from "../assets/products/brocoli.jpg";
import bananaImage from "../assets/products/banana.jpg";

const defaultProduct = {
  image: orangeImage,
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

const defaultMilk = {
  category: {
    _id: "milk",
  },
  ...defaultProduct,
};

const milk = {
  ...defaultMilk,
  _id: "milk",
  title: "Milk",
  sku: "1234567890122",
  image: milkImage,
  price: 3.5,
};

const apple = {
  ...defaultFruit,
  _id: "green-apple",
  title: "Green Apple",
  sku: "1234567890123",
  image: greenApple,
  price: 0.5,
};

const avocado = {
  ...defaultFruit,
  _id: "avocado",
  title: "Avocado",
  sku: "1234567890124",
  image: avocadoImage,
  price: 2,
};

const banana = {
  ...defaultFruit,
  _id: "banana",
  title: "Banana",
  sku: "1234567890125",
  image: bananaImage,
  price: 0.6,
};

const lettuce = {
  ...defaultVeg,
  _id: "lettuce",
  title: "Lettuce",
  sku: "1234567890126",
  image: lettuceImage,
  price: 1.8,
};

const tomato = {
  ...defaultVeg,
  _id: "tomato",
  title: "Tomato",
  sku: "1234567890127",
  image: tomatoImage,
  price: 2.6,
};

const broccoli = {
  ...defaultVeg,
  _id: "broccoli",
  title: "Broccoli",
  sku: "1234567890128",
  image: brocoliImage,
  price: 1.2,
};

const papaya = {
  ...defaultFruit,
  _id: "papaya",
  title: "Papaya",
  sku: "1234567890129",
  image: papayaImage,
  price: 1.9,
};

const corn = {
  ...defaultVeg,
  _id: "corn",
  title: "Corn",
  sku: "1234567890130",
  image: cornImage,
  price: 2,
};

const products = [banana, milk, apple, lettuce, corn, papaya, tomato, avocado, broccoli];

export default products;
