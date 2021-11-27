import { actionTypes } from "./constants";

const addProduct = (payload) => {
  return {
    type: actionTypes.ADD_NEW_PRODUCT,
    payload,
  };
};

export { addProduct };
