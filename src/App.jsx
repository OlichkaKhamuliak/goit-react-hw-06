import css from "./App.module.css";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ContactList } from "./components/ContactList/ContactList";
import { FaAddressBook } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.contacts.items);
  const nameFilter = useSelector((state) => state.filters.name);

  const addUser = (newUser) => {
    dispatch({
      type: "contacts/addContact",
      payload: newUser,
    });
  };

  const deleteUser = (userId) => {
    dispatch({
      type: "contacts/deleteContact",
      payload: userId,
    });
  };

  const visibleUsers = users.filter((user) =>
    user.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  const handleFilterChange = (newValue) => {
    dispatch({
      type: "filters/setFilter",
      payload: newValue,
    });
  };

  return (
    <div style={{ padding: 8 }}>
      <h1 className={css.title}>
        <FaAddressBook className={css.icon} />
        Phone Book
      </h1>
      <ContactForm onSubmit={addUser} />
      {users.length > 0 ? (
        <SearchBox value={nameFilter} onChange={handleFilterChange} />
      ) : (
        <p className={`${css.text} ${css.noContacts}`}>
          You don`t have any contacts yet.
        </p>
      )}
      {visibleUsers.length > 0 ? (
        <ContactList contacts={visibleUsers} onDelete={deleteUser} />
      ) : (
        nameFilter &&
        users.length > 0 && (
          <p className={css.text}>No matches found for `{nameFilter}`</p>
        )
      )}
    </div>
  );
};
