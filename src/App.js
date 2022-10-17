import React from "react";
import ProductList from "./Component/ProductList/ProductList";
import "./css/App.css";
import NavBar from "./Component/NavBar/NavBar";
import Wrapper from "./Component/Wrapper/Wrapper";
import ProductsProvider from "./Component/Providers/ProductsProvider";
import Filter from "./Component/Filter/Filter";
import SearchBar from "./common/search/Search";

const App = () => {
  return (
    <Wrapper class="container">
      <ProductsProvider>
        <NavBar />
        <Filter />
        <h1>Your Cart</h1>
        <ProductList />
      </ProductsProvider>
    </Wrapper>
  );
};

export default App;
