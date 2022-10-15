import React, { useState } from "react";
import Select from "react-select";
import { productsData } from "../../db/products";
import { useProducts, useProductsAction } from "../Providers/ProductsProvider";

const sizeOptions = [
  { value: "", label: "All" },
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
];
const priceOptions = [
  { value: "", label: "All" },
  { value: "cheapest", label: "cheapest" },
  { value: "the most expensive", label: "the most expensive" },
];
const Filter = () => {
  const dispatch = useProductsAction();
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");

  const sizeChangeHandler = (selectedOption) => {
    console.log(selectedOption);
    dispatch({ type: "sizeFilter", selectedOption });
    dispatch({ type: "priceFilter", selectedOption: price });
    setSize(selectedOption);
  };
  const priceChangeHandler = (selectedOption) => {
    dispatch({ type: "priceFilter", selectedOption });
    setPrice(selectedOption);
  };

  return (
    <div>
      <br />
      <p>filter products based on :</p>
      <div>
        order by :
        <Select
          value={size}
          onChange={sizeChangeHandler}
          options={sizeOptions}
        />
        <Select
          value={price}
          onChange={priceChangeHandler}
          options={priceOptions}
        />
      </div>
      <br />
    </div>
  );
};
export default Filter;
