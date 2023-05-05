import { ADD_PRODUCT } from "./actionTypes";

export const addProduct = (name, price, description) => {
  return { type: ADD_PRODUCT, paayload: { name, price, description } };
};
