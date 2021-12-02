import React, { useState } from "react";
import Input from "../../components/CustomInput";
import Button from "../../components/CustomButton";
import "./index.css";
import { useDispatch } from "react-redux";
import { addProduct } from "./actions";
import { v4 as uuidv4 } from "uuid";
const Form = () => {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState(0);
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: "",
  });

  const dispatch = useDispatch();

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
    const data = { ...product, id: uuidv4() };
    dispatch(addProduct(data));
    setProduct({
      title: "",
      price: 0,
      description: "",
    });
  };
  return (
    <form className="form">
      <Input
        placeholder="title"
        onChange={handleChange}
        id="title"
        value={product.title}
      />
      <Input
        placeholder="Price"
        onChange={handleChange}
        id="price"
        type="number"
        value={product.price}
      />
      <Input
        onChange={handleChange}
        id="description"
        isTextArea={true}
        value={product.description}
      />
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
