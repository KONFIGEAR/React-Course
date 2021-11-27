import React from "react";
import Form from "../../containers/Form";
import Products from "../../containers/Products";

const index = () => {
  return (
    <>
      <h1>Form container</h1>
      <Form />
      <h1>Products container</h1>

      <Products />
    </>
  );
};
export default index;
