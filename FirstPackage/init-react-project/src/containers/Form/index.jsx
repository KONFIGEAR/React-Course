import React, { useState } from "react";
import Input from "../../components/CustomInput";
import Button from "../../components/CustomButton";
import "./index.css";

const Form = () => {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState(0);
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: "",
  });

  const handleChange = (e) => {
    switch (e.target.id) {
      case "price":
        setProduct({ ...product, price: parseInt(e.target.value) });
        // setPrice(parseInt(e.target.value));
        break;
      case "title":
        setProduct({ ...product, title: e.target.value });

        // setTitle(e.target.value);
        break;
      case "description":
        setProduct({ ...product, description: e.target.value });

        // setDescription(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    const data = { ...product };
    console.log("testttt", data);
  };
  return (
    <form className="form">
      <Input placeholder="title" onChange={handleChange} id="title" error />
      <Input
        placeholder="Price"
        onChange={handleChange}
        id="price"
        type="number"
      />
      <Input onChange={handleChange} id="description" isTextArea={true} />
      <Button className="submit" onClick={handleClick}>
        Submit
      </Button>
      title: {product.title}
      <br />
      Price: {product.price}
      <br />
      description : {product.description}
    </form>
  );
};

export default Form;
