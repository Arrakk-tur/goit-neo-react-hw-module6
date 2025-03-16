import styles from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
// import { selectFilter } from "../../redux/filtersSlice";
import { selectFilterName } from "../../redux/filtersSlice"; // Changed selector name

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterName);

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label className={styles.label}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          className={styles.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
