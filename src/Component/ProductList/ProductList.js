import Product from "../product/Product";
import { useProducts, useProductsAction } from "../Providers/ProductsProvider";
import styles from "./productList.module.css";

const ProductList = () => {
  const products = useProducts();
  const dispatch = useProductsAction();
  const renderProduct = () => {
    if (products.length === 0) return <div>Cart is empty !</div>;

    return products.map((product, index) => {
      return (
        <div>
          <Product
            product={product}
            key={index}
            click={() => dispatch({ type: "remove", id: product.id })}
            inc={() => dispatch({ type: "increment", id: product.id })}
            dec={() => dispatch({ type: "decrement", id: product.id })}
            inputChange={(e) =>
              dispatch({ type: "edit", id: product.id, event: e })
            }
          />
        </div>
      );
    });
  };

  return (
    <div className={styles.productList}>
      {!products.length && <div className={styles.link}>go to products</div>}
      {renderProduct()}
    </div>
  );
};

export default ProductList;
