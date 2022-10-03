import React, { useState } from "react";
import HookCounter from "./Component/hoc/ClickCounter";
import ProductList from "./Component/ProductList/ProductList";
import "./css/App.css";
import NavBar from "./Component/NavBar/NavBar";
import ClassCounter from "./Component/ClassCounter";
import FunctionalCounter from "./Component/FunctionalCounter";
import ClassTimer from "./Component/ClassTimer";
import FunctionalTimer from "./Component/FunctionalTimer";
import Wrapper from "./Component/Wrapper/Wrapper";
import ClickCounter from "./Component/hoc/ClickCounter";
import HoverCounter from "./Component/hoc/HoverCounter";
import UseRefEx from "./Component/UseRefEx";

class App extends React.Component {
  state = {
    products: [
      { title: "book", price: "100", id: 1, quantity: 3 },
      { title: "note book", price: "150", id: 2, quantity: 1 },
      { title: "pen", price: "20", id: 3, quantity: 1 },
    ],
    isShow: true,
  };
  removeHandler = (id) => {
    const filteredProduct = this.state.products.filter((p) => p.id != id);
    this.setState({ products: filteredProduct });
  };
  incHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id == id);
    const product = { ...this.state.products[index] };
    product.quantity++;
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };
  decHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id == id);
    const product = { ...this.state.products[index] };
    if (product.quantity == 1) {
      const filteredProduct = this.state.products.filter((p) => p.id != id);
      this.setState({ products: filteredProduct });
    } else {
      product.quantity--;
      const products = [...this.state.products];
      products[index] = product;
      this.setState({ products });
    }
  };
  changeHandler = (e, id) => {
    const index = this.state.products.findIndex((item) => item.id == id);
    const product = { ...this.state.products[index] };
    product.title = e.target.value;
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  render() {
    return (
      <Wrapper class="container">
        <UseRefEx />
        {/* <ClickCounter/>
        <HoverCounter/> */}
        {/* <NavBar
          totalItems={this.state.products.filter((p) => p.quantity > 0).length}
          />
        <h1>Your Cart</h1>
        <ProductList
          products={this.state.products}
          onRemove={this.removeHandler}
          onIncrement={this.incHandler}
          onDecrement={this.decHandler}
          onChange={this.changeHandler}
          /> */}
        {/* <button
            onClick={() => this.setState({ isShow: !this.state.isShow })}
          >{this.state.isShow ? "hide" : "show"}</button>
          {this.state.isShow && <FunctionalTimer/>} */}
        {/* <FunctionalCounter/> */}
      </Wrapper>
    );
  }
}

export default App;
