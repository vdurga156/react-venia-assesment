import { ActionTypes } from "../constants/action-types";

export function getProductSuccess(products) {
  return {
    type: ActionTypes.GET_PRODUCTS_SUCCESS,
    products
  };
}

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const getProducts = (products) => {
  return {
    type: ActionTypes.GET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
