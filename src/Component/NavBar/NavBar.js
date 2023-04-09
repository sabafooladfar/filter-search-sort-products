import { useProducts } from "../Providers/ProductsProvider";
import style from "./NavBar.module.css";

const NavBar = () => {
  const products = useProducts();
  const totalItems = products.filter((p) => p.quantity > 0).length;
  return (
    <div className={style.nav}>
      <p>saba's shopping </p>
      <p className={style.badge}>{totalItems}</p>
    </div>
  );
};

export default NavBar;
