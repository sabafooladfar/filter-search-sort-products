import { useState } from "react";
import { useProductsAction } from "../../Component/Providers/ProductsProvider";
import styles from "./search.module.css";
const SearchBar = ({ filter }) => {
  const dispatch = useProductsAction();
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    dispatch({ type: "sizeFilter", selectedOption: filter });
    dispatch({ type: "search", event: e });
    setSearch(e.target.value);
  };

  return (
    <div>
      <form className={styles.formControl}>
        <div>Search Products</div>
        <input
          type="text"
          placeholder="search here ..."
          value={search}
          onChange={searchHandler}
        />
      </form>
    </div>
  );
};
export default SearchBar;
