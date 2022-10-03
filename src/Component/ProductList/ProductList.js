import { Component } from "react";
import Product from "../product/Product";
import styles from "./productList.module.css";

class ProductList extends Component {
  renderProduct = () => {
    const { products, onChange, onRemove, onDecrement, onIncrement } =
      this.props;
    if (products.length === 0) return <div>Cart is empty !</div>;

    return products.map((product, index) => {
      return (
        <div>
          <Product
            product={product}
            key={index}
            click={() => onRemove(product.id)}
            inc={() => onIncrement(product.id)}
            dec={() => onDecrement(product.id)}
            inputChange={(e) => onChange(e,product.id)}
          />
        </div>
      );
    });
  };
  render() {
    const{products}= this.props;
    return (
      <div className={styles.productList}>
        {!products.length && <div>go to products</div>} <br />
        {this.renderProduct()}
      </div>
    );
  }
}

export default ProductList;
