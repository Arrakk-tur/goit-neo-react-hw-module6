import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.contactItem}>
      <div className={styles.userInfo}>
        <div className={styles.contactInfo}>
          <span className={styles.contactIcon}>👤</span>
          <p className={styles.contactName}>{name}</p>
        </div>
        <div className={styles.contactInfo}>
          <span className={styles.contactIcon}>📞</span>
          <p className={styles.contactNumber}>{number}</p>
        </div>
      </div>
      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
