import css from "./SearchBox.module.css";

export const SearchBox = ({ value, onChange }) => {
  const handleChange = (event) => {
    const newValue = event.target.value;
    onChange(newValue);
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
