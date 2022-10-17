import React, { useState } from "react";
import Select from "react-select";
import SelectCompnent from "../../common/Select/Select";
import { productsData } from "../../db/products";
import { useProducts, useProductsAction } from "../Providers/ProductsProvider";
import SearchBar from "../../common/search/Search";

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
      <SearchBar filter={size} />
      <p>filter products based on :</p>
      <div>
        <SelectCompnent
        title="order by size"
         value={size}
         onChange={sizeChangeHandler}
         options={sizeOptions}
        />
        <SelectCompnent
        title="sort by price"
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
