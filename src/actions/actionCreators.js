import { ADD_PRODUCT } from "./actionTypes";

export const addProduct = (name, price, description, count, image) => {
  return {
    type: ADD_PRODUCT,
    payload: { name, price, description, count, image },
  };
};
