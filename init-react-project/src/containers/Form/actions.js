import { actionTypes } from "./constants";

const addProduct = (payload) => {
  return {
    type: actionTypes.ADD_NEW_PRODUCT,
    payload,
  };
};

const deleteProduct = (payload) => {
  return {
    type: actionTypes.DELETE_PRODUCT,
    payload,
  };
};
export { addProduct, deleteProduct };
