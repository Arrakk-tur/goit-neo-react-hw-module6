import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.searchBox}>
      <label className={styles.label}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={styles.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
