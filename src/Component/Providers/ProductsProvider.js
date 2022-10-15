import React, { createContext, useState, useContext, useReducer } from "react";
import { productsData } from "../../db/products";
import _ from "lodash";

const ProductsContext = React.createContext();
const ProductsContextDispatcher = React.createContext();

const initialState = productsData;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const index = state.findIndex((item) => item.id == action.id);
      const product = { ...state[index] };
      product.quantity++;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }
    case "decrement": {
      const index = state.findIndex((item) => item.id == action.id);
      const product = { ...state[index] };
      if (product.quantity == 1) {
        const filteredProduct = state.filter((p) => p.id != action.id);
        return filteredProduct;
      } else {
        product.quantity--;
        const updatedProducts = [...state];
        updatedProducts[index] = product;
        return updatedProducts;
      }
    }
    case "remove": {
      const filteredProduct = state.filter((p) => p.id != action.id);
      return filteredProduct;
    }
    case "edit": {
      const index = state.findIndex((item) => item.id == action.id);
      const product = { ...state[index] };
      product.title = action.event.target.value;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }
    case "sizeFilter": {
      if (action.selectedOption.value === "") {
        return productsData;
      } else {
        const filteredProduct = productsData.filter(
          (p) => p.size.indexOf(action.selectedOption.value) >= 0
        );
        return filteredProduct;
      }
    }
    case "priceFilter": {
      const products = [...state];
      if (action.selectedOption.value === "") {
        return productsData;
      } else if (action.selectedOption.value === "cheapest") {
      return  _.orderBy(products, 'price', 'asc');
      } else {
        return  _.orderBy(products, 'price', 'desc');

      }
    }
    default:
      return;
  }
};
const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductsContext.Provider value={products}>
      <ProductsContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductsContextDispatcher.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);

export const useProductsAction = () => {
  return useContext(ProductsContextDispatcher);
};
