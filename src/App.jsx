import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
// import { fetchContacts } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Here can be dispatch(fetchContacts()) to fetch contacts from API
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
