import { useSelector } from "react-redux";
import Contact from "./Contact";
import styles from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilterName } from "../../redux/filtersSlice"; // Changed selector name
import { createSelector } from "@reduxjs/toolkit";

const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterName],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
