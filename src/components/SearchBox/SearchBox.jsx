import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";

export const SearchBox = ({ value, onChange }) => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const newValue = event.target.value;
    dispatch({ type: "setFilter", payload: newValue }); // Викликаємо дію для оновлення фільтру в Redux
    onChange(newValue); // Викликаємо передану функцію onChange для встановлення значення у відповідному компоненті
  };
  return (
    <div className={css.wrapper}>
      <p>Finds contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
