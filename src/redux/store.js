import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contactSlice";
import { filtersReduser } from "./filterSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filters: filtersReduser,
  },
});
