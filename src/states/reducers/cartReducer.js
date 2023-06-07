import * as actions from "../actionTypes/actionTypes";

const reducer = (state = [], action) => {
  let done = false;
  switch (action.type) {
    case actions.CART_ADD:
      const newState = state.map(item => {
        if (item._id === action.payload._id) {
          done = true;
          if (item.availableQuantity > item.quantity) {
            return { ...item, quantity: item.quantity + 1}
          }
        }
        return item;
      });
      if (!done) {
        return [
          ...newState,
          {
            _id: action.payload._id,
            category: action.payload.category,
            createdAt: action.payload.createdAt,
            description: action.payload.description,
            image: action.payload.image,
            price: action.payload.price,
            sku: action.payload.sku,
            title: action.payload.title,
            updatedAt: action.payload.updatedAt,
            availableQuantity: action.payload.quantity,
            quantity: 1,
          },
        ];
      }
      return newState;

    case actions.CART_REMOVE:
      return state.filter((item) => item._id !== action.payload);

    case actions.INCREASE_CART_ITEM_QUANTITY:
      if (action.payload.type === "increase") {
        return state.map(item => {
          if (item._id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 }; 
          }
          return item;
        });
      }

    case actions.DECREASE_CART_ITEM_QUANTITY:
      if (action.payload.type === "decrease") {
        return state.map(item => {
          if (item._id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      }
    case actions.EMPTY_CART:
      if (action.payload === "empty") {
        return [];
      }

    default:
      return state;
  }
};

export default reducer;
