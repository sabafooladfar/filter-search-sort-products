import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";

const Product = ({ product, inputChange, inc, dec, click }) => {
  return (
    <div className={styles.product}>
      <p>{product.title}</p>
      <p>{product.price} $</p>
      <span className={styles.quantity}>{product.quantity}</span>
      <input
        type="text"
        onChange={inputChange}
        value={product.title}
        data-id={product.id}
      />
      <br />
      <button
        className={styles.btn}
        onClick={inc}
        data-id={product.id}
      >
        +
      </button>
      <button
        className={`${styles.btnMinus} ${
          product.quantity == 1 && styles.remove
        }`}
        onClick={dec}
        data-id={product.id}
      >
        {product.quantity > 1 ? "-" : <BiTrash />}
      </button>
      <button onClick={click}>delete</button>
    </div>
  );
};

export default Product;
