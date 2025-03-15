import styles from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
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
      <button className={styles.deleteButton} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
